//Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema
const boxColorSchema = new Schema({
  r: {type:Number, min: 0, max: 255},
  g: {type:Number, min: 0, max: 255},
  b: {type:Number, min: 0, max: 255}
})

//Modelo
const BoxColor = mongoose.model('BoxColor',boxColorSchema);
module.exports=BoxColor;