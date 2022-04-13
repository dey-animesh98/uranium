const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        bookName: {
            type: String,
            required: true
        },
        authorName: {
            type: String, required: true
        },
       
        tags: [String],

        isPublished: Boolean,

        publishYear: Number,

        prices: {
            indianPrice: String,
            europianPrice: String
        },

        totalPages: Number,

        stockStatus: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model("1-Book", bookSchema);







































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
