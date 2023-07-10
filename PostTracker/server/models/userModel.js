import mongoose from "mongoose";
// const { Schema } = mongoose;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: [5, "Enter atleast 5 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
