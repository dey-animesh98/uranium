const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      unique: true
    },
    authorName: { 
      type: String, 
      required: true 
    },
      bookCategory: {
      type: String,
      enum: ["drama", "adventure", "mystery", "crime", "romance","lifestyle"],
    },
    publishYear: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //books
