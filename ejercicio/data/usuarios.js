let usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com', edad: 30 },
    { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com', edad: 25 },
];

// Obtener todos los usuarios
const obtenerTodos = () => usuarios;

// Obtener un usuario por ID
const obtenerPorId = (id) => usuarios.find((u) => u.id === parseInt(id));

// Crear un nuevo usuario
const crear = (datos) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        ...datos,
    };
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
};

// Actualizar un usuario existente
const actualizar = (id, datos) => {
    const index = usuarios.findIndex((u) => u.id === parseInt(id));
    if (index === -1) return null;

    usuarios[index] = { ...usuarios[index], ...datos };
    return usuarios[index];
};

// Eliminar un usuario por ID
const eliminar = (id) => {
    const index = usuarios.findIndex((u) => u.id === parseInt(id));
    if (index === -1) return null;

    const eliminado = usuarios[index];
    usuarios.splice(index, 1);
    return eliminado;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
};
