const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,

    author: {
      type: ObjectId,
      ref: "newAuthor"
    },

    price: Number,

    rating: Number,

    publisher: {
      type: ObjectId,
      ref: "newPublisher"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("newBook", bookSchema);


