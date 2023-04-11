const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProdSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
  Imagen: {
    type: String,
    required: true
  },
  Descripcion: {
    type: String,
    require: true,
  },
  Existencia: {
    type: Number,
    require: true,
  },
  Categoria: {
    type: String,
    require: true
  },
});


module.exports = mongoose.model('Productos',ProdSchema);
