//Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema
const creditCardSchema = new Schema({
  type: {type:String, enum: ['Visa', 'Master Card']},
  number: {type:Number},
  expirationMonth: {type:Number, min:1, max:12},
  expirationYear:{type:Number, maxlength:4},
  bank:{type:String},
  owner: {type:String},
  bgColor:{type:String, maxlength:7, validate: {
    validator: (text) => {
      return text.indexOf('#') === 0;
    },},},
  color:{type:String}
},
{timestamps:{
  createdAt: 'created_at',
  updatedAt:'updated_at'
}
})

//Modelo
const IdCard = mongoose.model('IdCard',idCardSchema);
module.exports=IdCard;