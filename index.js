// const express = require('express');
// const app = express();
// const PORT = 3000;


// app.use(express.json())// es lo actual, que superó a body-parser versiojn de expres. 4.16.00 en eadelante

// let productos = [{id:1, nombre: "Computadora"},{id:2, nombre: "Monitor"}]

// app.get('/productos', (req, res)=>{
//     const { codigo }= req.query  //http://localhost:3000/productos?codigo=158548545
//     res.status(200).json(productos)
//     console.log(codigo) //respuesta: 158548545
// })
// app.post('/productos', (req, res)=>{
//     const nuevoProducto = {id: productos.length + 1, ...req.body }
//     productos.push(nuevoProducto)
//     res.status(201).json(nuevoProducto)
// })
// app.put('/productos/:id', (req, res)=>{
//     const { id } = req.params
//     let producto = productos.find(prod => prod.id == id)
//     const productoActualizado = req.body 
//     productos = {...productos, ...productoActualizado}
//     res.json(productoActualizado)
// })

// app.delete('/productos/:id', (req, res)=>{
//     const { id } = req.params //const id = req.params.id
    
//     productos = productos.filter(prod => prod.id != id)
//     res.send(`producto con id:${id} borrado`)
// })

// app.listen(PORT, ()=>{
//     console.log(`Servidor levantado en el puerto: ${PORT}`)
// })

// Uso del paquete body-parser
//es un middleware que facilita el análisis del cuerpo de las solicitudes en formato JSON. Aunque ahora Express tiene esta funcionalidad incorporada

//npm install body-parser

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: true }));

// app.use(express.json())// es lo actual, que superó a body-parser versiojn de expres. 4.16.00 en eadelante


// intrpduccion a los codigo sde respuestas HTTP

// Categorías principales:
// 1XX (Informativos): La solicitud está en proceso.
// 2XX (Éxito): La solicitud fue procesada exitosamente (por ejemplo, 200 OK).
// 3XX (Redirección): Requiere acción adicional (301 Moved Permanently).
// 4XX (Errores del cliente): Problema en la solicitud (404 Not Found, 400 Bad Request).
// 5XX (Errores del servidor): Fallo en el servidor (500 Internal Server Error).
