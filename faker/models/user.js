var mongoose = require('mongoose')

var fakerSchema = new mongoose.Schema({
    firstname:String,
    lastName:String,
    phoneNumber:String,
    city:String,
    state:String,
    country:String
});

module.exports = mongoose.model('fakerCollection', fakerSchema);

