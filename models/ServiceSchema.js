const mongoose = require('mongoose')

const ServiceShema = new mongoose.Schema({
    Name: String,
    Phone: Number,
    GeneralService : Boolean,
    OilChange : Boolean,
    BikeWash : Boolean,
    DateOfNeeded : String,
    Delivery : String
})

module.exports = mongoose.model('Service',ServiceShema)
