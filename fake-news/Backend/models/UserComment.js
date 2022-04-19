const mongoose = require("mongoose");

const userCommentSchema = mongoose.Schema(
  {
    Comment: {
      type: String,
    },
    username: {
      type: String,
    },
    profileUrl: {
      type: String,
    },
    timestamp: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userComment", userCommentSchema);
