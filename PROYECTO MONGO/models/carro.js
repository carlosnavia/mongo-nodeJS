const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  año: { type: Number, required: true },
  especificaciones: {
    motor: { type: String, required: true },
    potencia_hp: { type: Number, required: true },
    tipo: { type: String, required: true }
  }
});

module.exports = mongoose.model('Carro', CarroSchema);
