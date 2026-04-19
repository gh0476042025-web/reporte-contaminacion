const express = require('express');
const router = express.Router();
const Reporte = require('../models/Reporte');

// RUTA POST → recibe y guarda un nuevo reportem
// Se activa cuando el formulario envía datos
router.post('/', async (req, res) => {
  try {
    const nuevoReporte = new Reporte(req.body); // crea el reporte con los datos del formulario
    await nuevoReporte.save();                  // lo guarda en MongoDB Atlas
    res.status(201).json({ mensaje: 'Reporte guardado', reporte: nuevoReporte });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// RUTA GET → devuelve todos los reportes guardados
// Se activa cuando la página carga para mostrar la lista
router.get('/', async (req, res) => {
  try {
    const reportes = await Reporte.find().sort({ fecha: -1 }); // trae todos, del más nuevo al más viejo
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;