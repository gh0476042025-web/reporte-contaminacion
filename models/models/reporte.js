// Importamos mongoose para definir cómo se guardan los datos
const mongoose = require('mongoose');

// Aquí definimos los campos que tendrá cada reporte en MongoDB
const reporteSchema = new mongoose.Schema({

  nombreCompleto: {
    type: String,     // es texto
    required: true    // es obligatorio
  },

  direccion: {
    type: String,
    required: true
  },

  tipoContaminacion: {
    type: String,
    required: true,
    enum: ['Aire', 'Agua', 'Suelo', 'Ruido', 'Visual', 'Otro'] // solo estos valores
  },

  descripcion: {
    type: String,
    required: true
  },

  fecha: {
    type: Date,
    default: Date.now  // si no se manda fecha, usa la fecha y hora actual
  }

});

// Exportamos el modelo para usarlo en otros archivos
module.exports = mongoose.model('Reporte', reporteSchema);