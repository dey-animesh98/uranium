const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    author_id: {
      type: Number,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    age: Number,

    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("2-Author", authorSchema);


















//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
