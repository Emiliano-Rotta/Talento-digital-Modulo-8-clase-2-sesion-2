// Ejercicio

// Desarrollar una API REST para gestionar un sistema básico de usuarios. 
// 
// La API debe permitir:
// Listar todos los usuarios registrados.
// Obtener los detalles de un usuario específico mediante su ID.
// Crear un nuevo usuario.
// Actualizar los datos de un usuario existente.
// Eliminar un usuario por ID.

// Especificaciones técnicas:
// Estructura de endpoints:

// GET /usuarios: Devuelve la lista completa de usuarios.
// GET /usuarios/:id: Devuelve el usuario correspondiente al ID especificado.
// POST /usuarios: Crea un nuevo usuario.
// PUT /usuarios/:id: Actualiza los datos del usuario correspondiente al ID.
// DELETE /usuarios/:id: Elimina al usuario correspondiente al ID.

// Datos esperados de un usuario:
// id: Número único (generado automáticamente para nuevos usuarios).
// nombre: Nombre del usuario (obligatorio).
// email: Correo electrónico (obligatorio, debe ser válido).
// edad: Edad del usuario (opcional).

// Usar body-parser para procesar el cuerpo de las solicitudes.
// Modularizar el código en al menos tres archivos: index.js, routes/usuarios.js y data/usuarios.js.


// Estructura
// api/
// ├── index.js
// ├── routes/
// │   └── usuarios.js
// └── data/
//     └── usuarios.js
