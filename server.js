//Acomodarlo con lo nuestro
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const memberRoutes = require('./routes/altaRoutes'); // Ruta de altas
const routineRoutes = require('./routes/bajaRoutes'); // Ruta de bajas
const classRoutes = require('./routes/modificarRoutes'); // Ruta de modificaciones

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
mongoose.connect('mongodb+srv://acvidela:tinchotecla@clustera.hys4b.mongodb.net/gimnasio?retryWrites=true&w=majority&appName=ClusterA')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Rutas 
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/altas', altaRoutes);
app.use('/api/bajas', bajaRoutes);
app.use('/api/modificaciones', modificarRoutes);


// Escuchar en un puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});