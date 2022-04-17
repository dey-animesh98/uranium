const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const PublisherModel = require("../models/publisherModel")

//Problem 1
const createNewAuthor = async function (req, res) {
    const data = req.body;
    const authorData = await AuthorModel.create(data);
    res.send({ msg: authorData })
}

//Problem 2
const createNewPublisher = async function (req, res) {
    const data = req.body;
    const publisherData = await PublisherModel.create(data);
    res.send({ msg: publisherData })
}

//Problem 3
const createNewBook = async function (req, res) {
    const data = req.body;
    const authorId = req.body.author
    const publisherId = req.body.publisher

    if (!data.author && !data.publisher) {
        (res.send({ msg: "Please Fill the required fields Author & Publisher details!!" }))
    } else if (!data.author) {
        (res.send({ msg: "Please Fill the required fields Author Details!!" }))
    } else if (!data.publisher) {
        (res.send({ msg: "Please Fill the required fields Publisher Details!!" }))
    } else {

        const theAuthor = await AuthorModel.findById(authorId)
        const thePublisher = await PublisherModel.findById(publisherId)

        if (!theAuthor) {
            res.send({ msg: "Author not Found" })

        } else if (!thePublisher) {
            res.send({ msg: "Publisher not Found" })

        } else {

            const bookData = await BookModel.create(data)
            res.send({ msg: bookData })
        }
    }

}


//Problem 4
const allDetails = async function (req, res) {
    const bookDetail = await BookModel.find().populate('author publisher')      //(['author', 'publisher']) //.populate('publisher').populate('author)
    res.send({ msg: bookDetail })
}


//Problem 5
const updateBooks = async function (req, res) {
    //Problem 5a
    await PublisherModel.find(
        { publisherName: { $in: ["Penguine", "Harper Collins"] } }).updateMany({ $set: { isHardCover: true } })
    
        // or,.updateMany({publisherName:{$in:["Risen Star"]}},{$set:{isHardCover:true}})

    //Problem 5b
    const ratedAuthorId = await AuthorModel.find(
        { rating: { $gt: 3.5 } }).select({ _id: 1 })

    await BookModel.updateMany(
        { author: ratedAuthorId }, { $inc: { price: 10 } }, { new: true })

    const finalUpdates = await BookModel.find()

    res.send({ msg: finalUpdates })
}

// Find books by Author Name




module.exports.createNewAuthor = createNewAuthor
module.exports.createNewPublisher = createNewPublisher
module.exports.createNewBook = createNewBook;
module.exports.allDetails = allDetails
module.exports.updateBooks = updateBooks



