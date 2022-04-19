const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      min: 5,
      max: 10,
      required: true,
    },
    username: {
      type: String,
      min: 5,
      max: 10,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      min: 5,
      max: 50,
      required: true,
    },
    password: {
      type: String,
      min: 5,
      max: 50,
      required: true,
    },
    profileUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
