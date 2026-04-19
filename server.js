const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');   // viene con Node, no se instala

const app  = express();
const PORT = 3000;

// --- Middlewares ---
app.use(express.json());                               // entiende JSON que manda el formulario
app.use(express.static(path.join(__dirname, 'public'))); // sirve el index.html automáticamente

// --- Conexión a MongoDB Atlas ---
// 👇 REEMPLAZA ESTE LINK CON EL TUYO DEL PASO 6
const MONGO_URL  =  process.env.MONGO_URL || 'mongodb+srv://alexi:admin1234@cluster0.r0f6gt0.mongodb.net/reportes?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch((err) => console.error('❌ Error de conexión:', err.message));

// --- Rutas ---
const reportesRouter = require('./routes/reportes');
app.use('/api/reportes', reportesRouter); // todas las rutas de reportes viven aquí

// --- Arrancar servidor ---
app.listen(PORT, () => {
  console.log(`🌐 Servidor en http://localhost:${PORT}`);
});