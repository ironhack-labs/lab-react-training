//Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema
const ratingSchema = new Schema({
  children: {type:Number, min:0, max:5}
})

//Modelo
const Rating = mongoose.model('Rating',ratingSchema);
module.exports=Rating;