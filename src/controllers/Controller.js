
const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const PublisherModel = require("../models/publisherModel")
//Problem 1

const createNewAuthor = async function (req, res) {
    const data = req.body;
    const authorData = await AuthorModel.create(data);
    res.send({ msg: authorData });
    

}
//Problem 3
const createNewPublisher = async function (req, res) {
    const data = req.body;
    if(data.author_id && data.authorName){
        const authorData = await AuthorModel.create(data);
    res.send({ msg: authorData });
    }else{
        res.send({ msg: "Please enter Required Field" });
    }

}


const createNewBook = async function (req, res) {
    const data = req.body;
if  (data.author_id && data.bookName){
    const bookData = await BookModel.create(data);
    res.send({ msg: bookData });
}else{
    res.send({ msg: "Please enter Required Field" });

}

};

module.exports.createNewAuthor = createNewAuthor;
module.exports.createNewBook = createNewBook;




















