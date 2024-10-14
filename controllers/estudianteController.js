const Estudiante = require('../models/estudianteModel'); // Asegúrate de la ruta correcta

// Obtener todos los estudiantes
exports.obtenerEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los estudiantes', error });
  }
};

// Obtener un estudiante por DNI
exports.obtenerEstudiantePorDni = async (req, res) => {
  try {
    const estudiante = await Estudiante.findOne({ dni: req.params.dni });
    if (!estudiante) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json(estudiante);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el estudiante', error });
  }
};

// Crear un nuevo estudiante
exports.crearEstudiante = async (req, res) => {
  try {
    const nuevoEstudiante = new Estudiante(req.body);
    const estudianteGuardado = await nuevoEstudiante.save();
    res.status(201).json(estudianteGuardado);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el estudiante', error });
  }
};

// Actualizar un estudiante por DNI
exports.actualizarEstudiante = async (req, res) => {
  try {
    const estudianteActualizado = await Estudiante.findOneAndUpdate(
      { dni: req.params.dni },
      req.body,
      { new: true, runValidators: true }
    );
    if (!estudianteActualizado) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json(estudianteActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el estudiante', error });
  }
};

// Eliminar un estudiante por DNI
exports.eliminarEstudiante = async (req, res) => {
  try {
    const estudianteEliminado = await Estudiante.findOneAndDelete({ dni: req.params.dni });
    if (!estudianteEliminado) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.status(200).json({ message: 'Estudiante eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el estudiante', error });
  }
};
