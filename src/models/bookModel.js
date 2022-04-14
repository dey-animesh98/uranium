const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName:  String,
    author_id: Number,
    price: Number,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("2-Book", bookSchema);
