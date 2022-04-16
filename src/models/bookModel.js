const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
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


