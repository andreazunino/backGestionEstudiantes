const express = require('express');
const router = express.Router();
const Estudiante = require('../models/estudianteModel'); // Asegúrate de que el modelo esté bien importado

// Ruta para agregar un estudiante (POST)
router.post('/', async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    await nuevoEstudiante.save();
    res.status(201).json({ message: 'Estudiante agregado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al agregar el estudiante' });
  }
});

// Ruta para listar todos los estudiantes (GET)
router.get('/', async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.status(200).json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los estudiantes' });
  }
});

router.delete('/:id', async (req, res) => {
    try {
      console.log(`Intentando eliminar estudiante con ID: ${req.params.id}`); // Verifica el ID
  
      const estudiante = await Estudiante.findByIdAndDelete(req.params.id);
      
      if (!estudiante) {
        console.log('Estudiante no encontrado');
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
  
      console.log('Estudiante eliminado exitosamente:', estudiante);
      res.status(200).json({ message: 'Estudiante eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar el estudiante:', error);
      res.status(500).json({ error: 'Error al eliminar el estudiante' });
    }
  });
  
// Ruta para actualizar un estudiante por ID (PUT)
router.put('/:id', async (req, res) => {
  try {
    const estudianteActualizado = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!estudianteActualizado) return res.status(404).json({ error: 'Estudiante no encontrado' });
    res.status(200).json(estudianteActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al actualizar el estudiante' });
  }
});

module.exports = router;
