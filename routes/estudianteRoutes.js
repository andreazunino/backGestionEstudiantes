const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController'); // Asegúrate de la ruta correcta

// Rutas para los estudiantes
router.get('/', estudianteController.obtenerEstudiantes); // Obtener todos los estudiantes
router.get('/:dni', estudianteController.obtenerEstudiantePorDni); // Obtener un estudiante por DNI
router.post('/', estudianteController.crearEstudiante); // Crear un nuevo estudiante
router.put('/:dni', estudianteController.actualizarEstudiante); // Actualizar un estudiante por DNI
router.delete('/:dni', estudianteController.eliminarEstudiante); // Eliminar un estudiante por DNI

module.exports = router;
