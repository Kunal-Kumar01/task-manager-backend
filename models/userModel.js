import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
    },
    password: {
        type: String,
        required: false,  // Not required for OAuth users
    },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local',
    },
    verificationExpires:{
      type:Date,
      default: function(){
        return new Date(Date.now() + 24*60*60*1000)
      }
    }
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', function(next) {
    if (this.authProvider === 'local' && !this.password) {
        return next(new Error('Password is required for local authentication'));
    }
    next();
});

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel;
