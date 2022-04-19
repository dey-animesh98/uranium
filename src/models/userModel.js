const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    gender: String,
    percentage: Number,

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);


