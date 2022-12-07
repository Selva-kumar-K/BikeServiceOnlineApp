//Importing the mongoose
const mongoose = require('mongoose')

//Connecting DB
const ConnectDB = (url) => {
    return mongoose.connect(url)
}


//Exporting Function
module.exports = ConnectDB

