const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required:true
    },
    service: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})
const User = mongoose.model('User', contactSchema);

module.exports = User;