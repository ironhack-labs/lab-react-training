//Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema
const greetingsSchema = new Schema({
  lang: {type:String, enum: ['de', 'en','es', 'fr']},
  children: {type:String}
},
{timestamps:{
  createdAt: 'created_at',
  updatedAt:'updated_at'
}
})

//Modelo
const Greetings = mongoose.model('Greetings',greetingsSchema);
module.exports=Greetings;