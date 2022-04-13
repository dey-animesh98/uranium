const { count } = require("console")
const BookModel= require("../models/bookModel")


//Problem 1
const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {    
    let allBooks= await BookModel.find().count() 
    res.send({msg: allBooks})
}

//Problem 2
const getBookList= async function (req, res) {    
    let booksList= await BookModel.find().select({bookName: 1, authorName: 1, _id: 0 }).count()
    res.send({msg: booksList})
}

//Problem 3
const getBookByYear= async function (req, res) {  
    let book = req.query.year  
    let bookByYear= await BookModel.find({ publishYear:{$eq : book}})
    res.send({msg: bookByYear})
}

//Problem 4
const getBookByParticular= async function (req, res) {  
    let bookType = req.query.type 
    let bookAuth = req.query.author
    let bookByType= await BookModel.find({$or: [{tags:{$eq : bookType}},{authorName:{$eq:bookAuth}}] })
    res.send({msg: bookByType})
}

// Problem 5
const getBookByINR= async function (req, res) {  
    let bookByINR= await BookModel.find({"prices.indianPrice": {$in:["100 INR","200 INR","300 INR"] }}).count()
    res.send({msg: bookByINR})
}

// Problem 6
const getBookByRandom= async function (req, res) {  
    let bookByRandom= await BookModel.find({$or:[{stockStatus:true},{ totalPages:{$gt:100}}]}).count()
    res.send({msg: bookByRandom})
}


module.exports.createNewBook= createNewBook
module.exports.getBooksData= getBooksData
module.exports.getBookList= getBookList
module.exports.getBookByYear= getBookByYear
module.exports.getBookByParticular= getBookByParticular
module.exports.getBookByINR= getBookByINR
module.exports.getBookByRandom = getBookByRandom





// hence the condition will differ based on what you input in the request body
// const getAllThings = async (req, res) => {
//     let data = req.body;
//     data.bookName;
//     data.year;
//     data.authorName;
//     data.price.indianPrice;
//     data.totalPage;
//     let allBooks = await bookUserModel.find(data).select({ bookName: true, authorName: true, price: { indianPrice: true }, _id: 0 })
//     res.send({ message: allBooks })










































 // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 

     //normally this is an asynchronous call..but await makes it synchronous
    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
  