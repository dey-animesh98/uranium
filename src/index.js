
const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route')
const moment = require('moment')
const ip = require("ip")
const { default: mongoose } = require('mongoose')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



mongoose.connect("mongodb+srv://animesh-dey98:9I9JRLwql3bINqUX@cluster0.vhmqo.mongodb.net/animesh-deyDB", { useNewUrlParser: true })
    .then(() => console.log("MongoDB is connected..."))
    .catch(err => console.log(err))



//---------ASSIGNMENT_19.04.2022------------//

app.use(
    function(req,res,next){
        
        const timestamp = moment().format('YYYY-MM-DD h:mm:ss a')            //new Date()
        const ipAddress = ip.address()
        const myUrl =req.originalUrl
        const apiMethod =req.method
        
        console.log(timestamp,"---",ipAddress,"---",myUrl,"---",apiMethod);
       
        next()
    }
)

//------------------------------------------//


app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000))
})