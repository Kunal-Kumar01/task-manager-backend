import transporter from "./emailConfig.js";
import {
  Verfication_Email_Template,
  Welcome_Email_Template,
} from "../utils/emailTemplate.js";

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const info = await transporter.sendMail({
      from: '"Task Manager" <kunal.lohano@gmail.com>',
      to: email,
      subject: "Verification",
      text: "Please find the verification code", // plain‑text body
      html: Verfication_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      ),
    });
    console.log("Message sent:", info);
  } catch (error) {
    console.log(error);
  }
};

export const WelcomeEmail = async (name, email) => {
  try {
    const info = await transporter.sendMail({
      from: '"Task Manager" <kunal.lohano@gmail.com>',
      to: email,
      subject: "Verified!",
      text: "Welcome! Manage your tasks intelligently!", // plain‑text body
      html: Welcome_Email_Template.replace("{name}", name), // HTML body
    });
    console.log("Message sent:", info);
  } catch (error) {
    console.log(error);
  }
};
