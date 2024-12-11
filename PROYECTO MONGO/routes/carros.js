const express = require('express');
const router = express.Router();
const Carro = require('../models/carro');

// Crear un carro
router.post('/', async (req, res) => {
  try {
    const nuevoCarro = new Carro(req.body);
    const carroGuardado = await nuevoCarro.save();
    res.status(201).json(carroGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los carros
router.get('/', async (req, res) => {
  try {
    const carros = await Carro.find();
    res.status(200).json(carros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un carro por ID
router.get('/:id', async (req, res) => {
  try {
    const carro = await Carro.findById(req.params.id);
    if (!carro) return res.status(404).json({ error: 'Carro no encontrado' });
    res.status(200).json(carro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un carro por ID
router.put('/:id', async (req, res) => {
  try {
    const carroActualizado = await Carro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!carroActualizado) return res.status(404).json({ error: 'Carro no encontrado' });
    res.status(200).json(carroActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un carro por ID
router.delete('/:id', async (req, res) => {
  try {
    const carroEliminado = await Carro.findByIdAndDelete(req.params.id);
    if (!carroEliminado) return res.status(404).json({ error: 'Carro no encontrado' });
    res.status(200).json({ message: 'Carro eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
