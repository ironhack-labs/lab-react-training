//Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema
const idCardSchema = new Schema({
  lastName: {type:String},
  firstName: {type:String},
  gender: {type:String, enum: ['female', 'male']},
  height:{type:String},
  birth:{type:Date},
  picture: {type:String}
},
{timestamps:{
  createdAt: 'created_at',
  updatedAt:'updated_at'
}
})

//Modelo
const IdCard = mongoose.model('IdCard',idCardSchema);
module.exports=IdCard;