//Importaciones
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema
const randomSchema = new Schema({
  min: {type:Number},
  max: {type:Number}
},
{timestamps:{
  createdAt: 'created_at',
  updatedAt:'updated_at'
}
})

//Modelo
const Random = mongoose.model('Random',randomSchema);
module.exports=Random;