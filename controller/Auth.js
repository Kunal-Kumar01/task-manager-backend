import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import otpGenerator from "otp-generator";
import "dotenv/config";
import { SendVerificationCode, WelcomeEmail } from "../middleware/email.js";

export const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      res
        .status(400)
        .json({ success: false, message: "All Fields are required" });
    }

    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      if (
        !userExists.isVerified &&
        userExists.verificationExpires < new Date()
      ) {
        await UserModel.deleteOne({ _id: userExists._id });
        res.status(400).json({
          success: false,
          message: "Verification Code Expired, Sign Up Again.",
        });
      } else if (!userExists.isVerified) {
        return res.status(400).json({
          success: false,
          message: "You have pending verification. Get Verified First!",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "User Already Exists, Please login!",
        });
      }
    }

    const hashedPass = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const user = await UserModel.create({
      email,
      name,
      password: hashedPass,
      authProvider: "local",
      verificationCode: otp,
    });

    SendVerificationCode(email, otp);
    return res.status(200).json({
      success: true,
      message:
        "User registered. Please Verify you Email Address within 24 horus. Thank you!",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await UserModel.findOne({
      verificationCode: code,
      verificationExpires: { $gt: new Date() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or Expired Code" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationExpires = undefined;

    await user.save();
    await WelcomeEmail(user.name, user.email);

    return res
      .status(200)
      .json({ success: true, message: "User Verified Successfully!" });
  } catch (error) {
    return res
      .statu(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
