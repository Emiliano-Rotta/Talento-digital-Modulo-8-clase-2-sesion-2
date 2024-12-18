const express = require('express');
const router = express.Router();
const usuariosData = require('../data/usuarios');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.status(200).json(usuariosData.obtenerTodos());
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
    const usuario = usuariosData.obtenerPorId(req.params.id);
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { nombre, email, edad } = req.body;
    if (!nombre || !email) {
        return res.status(400).json({ error: 'El nombre y el email son obligatorios.' });
    }
    const nuevoUsuario = usuariosData.crear({ nombre, email, edad });
    res.status(201).json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
});

// Actualizar un usuario existente
router.put('/:id', (req, res) => {
    const { nombre, email, edad } = req.body;
    const actualizado = usuariosData.actualizar(req.params.id, { nombre, email, edad });
    if (!actualizado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario actualizado', usuario: actualizado });
});

// Eliminar un usuario por ID
router.delete('/:id', (req, res) => {
    const eliminado = usuariosData.eliminar(req.params.id);
    if (!eliminado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario eliminado' });
});

module.exports = router;
