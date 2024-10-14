//Acomodarlo con lo nuestro
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const memberRoutes = require('./routes/memberRoutes'); // Ruta de miembros
const routineRoutes = require('./routes/routineRoutes'); // Ruta de rutinas
const classRoutes = require('./routes/classRoutes'); // Ruta de clases

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
app.use('/api/members', memberRoutes);
app.use('/api/routines', routineRoutes);
app.use('/api/classes', classRoutes);


// Escuchar en un puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});