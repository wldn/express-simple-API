var mongoose = require('mongoose')

var Schema = mongoose.Schema

var tempSchema = new Schema ({
  name: Number,
  category: String,
  safe: String
})

module.exports = mongoose.model('Temp', tempSchema)
