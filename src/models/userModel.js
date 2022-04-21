const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
        firstName : String,
        lastName: String,
        mobile: String,
        emailId: String,
        password: String,
        gender :{
            type:String,
            enum:  ["male", "female", "others"]
        },
        age: Number,
        isDeleted: {
            type:Boolean,
            default: false
        },

                          
}, { timestamps: true });

module.exports = mongoose.model('Auth-user', userSchema)
