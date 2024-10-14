const mongoose = require('mongoose');

// Definimos el Schema del Estudiante
const estudianteSchema = new mongoose.Schema({
  dni: {
    type: String,
    required: true,
    unique: true,
    minlength: 7,
    maxlength: 8
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  fecha_nacimiento: {
    type: Date,
    required: true
  },
  telefono: {
    type: String,
    validate: {
      validator: function (v) {
        return /\+?\d{1,3}?\s?\d{2,3}?\s?\d{3,4}?\s?\d{4}/.test(v);
      },
      message: props => `${props.value} no es un número de teléfono válido.`
    },
    required: [true, 'El teléfono es requerido.']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} no es un email válido.`
    }
  }
});

// Creamos el modelo
const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
