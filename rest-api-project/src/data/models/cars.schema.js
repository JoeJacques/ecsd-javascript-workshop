const mongoose = require('mongoose'); 

const CarSchema = { 
    id: String,
    make: String, 
    model: String, 
    year: String, 
    colour: String
}


module.exports = mongoose.model('Car', CarSchema);