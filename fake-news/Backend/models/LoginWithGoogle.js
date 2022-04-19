const mongoose = require("mongoose");

const loginWithGoogleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    givenName: {
      type: String,
    },
    googleId: {
      type: String,
    },
    email: {
      type: String,
    },
    profileUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("loginWithGoogle", loginWithGoogleSchema);
