const { Router } = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).post("/usuarios", async (req, res) => {
  try {
    // Obtener el username del cuerpo de la solicitud
    const { userName } = req.body;

    // Verificar si ya existe un usuario con el mismo username
    const usuarioExistente = await Usuario.findOne({ userName });

    if (usuarioExistente) {
      return res.status(409).json({ error: "El username ya está en uso" });
    }

    // Obtener los demás datos del usuario del cuerpo de la solicitud
    const { nombre, edad, correo, password, preferencias } = req.body;

    // Generar el hash del password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear una nueva instancia del modelo Usuario con los datos proporcionados
    const nuevoUsuario = new Usuario({
      nombre,
      edad,
      correo,
      userName,
      password: hashedPassword,
      preferencias,
    });

    // Guardar el nuevo usuario en la base de datos
    const usuarioGuardado = await nuevoUsuario.save();

    // Enviar una respuesta de éxito con el usuario guardado
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    // En caso de error, enviar una respuesta de error al cliente
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
