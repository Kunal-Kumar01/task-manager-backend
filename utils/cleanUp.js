import UserModel from "../models/userModel.js";

const cleanUnverifiedUsers = async () => {
  try {
    const result = await UserModel.deleteMany({
      isVerified: false,
      verificationExpires: { $lt: new Date() },
    });

    console.log(`cleaned up ${result.deletedCount} expired unverified users`);
    return result.deletedCount;
  } catch (error) {
    console.error("Error during cleanup:", error);
    throw error;
  }
};

export default cleanUnverifiedUsers;
