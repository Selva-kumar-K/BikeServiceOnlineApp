// importing mongoose 
const mongoose = require('mongoose')

// Creating a schema
const UserSchema = new mongoose.Schema({
    mail : String,
    phone : Number
})

// 'User' looking for plural in db
module.exports = mongoose.model('User', UserSchema )

