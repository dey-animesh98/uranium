const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});





router.get('/movies', function(req,res){
    const movieList = ["Titanic", "Conjuring", "Superman", "Avengers", "Harry Potter", "3 Iditots"]
    res.send(movieList)

})


router.get('/movies/:indexNumber', function(req,res){
    const movieList1 = ["Titanic", "Conjuring", "Superman", "Avengers", "Harry Potter", "3 Iditots"]
    const movieId = req.params.indexNumber
    for ( let i =0 ; i < movieList1.length; i++){
        if (movieId < movieList1.length){
            return res.send(movieList1[movieId])
        }else if(movieId > movieList1.length){
            return res.send("Invalid user input")
        }      
    }  
})


router.get('/films', function(req,res){
    const filmList =[
                         {"id" :1, "name" : "Titanic"},
                         {"id" :2, "name" : "Conjuring"},
                         {"id" :3, "name" : "Superman"},
                         {"id" :4, "name" : "Avengers"},
                         {"id" :5, "name" : "Harry Potter"},
                    ]

    res.send(filmList)
})

router.get('/films/:filmId', function(req,res){
    const filmList =[
                         {"id" :1, "name" : "Titanic"},
                         {"id" :2, "name" : "Conjuring"},
                         {"id" :3, "name" : "Superman"},
                         {"id" :4, "name" : "Avengers"},
                         {"id" :5, "name" : "Harry Potter"},
                    ]
   
    const getFilmId = req.params.filmId
    for ( let i =0 ; i < filmList.length; i++){
        const myFilm = filmList[i]
        if( filmList.id === getFilmId){
            return res.send(filmList[myFilm])
        }
     }  

    
})



module.exports = router;
// adding this comment for no reason