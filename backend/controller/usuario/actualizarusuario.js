const { Router } = require("express");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).put("/usuarios/:id", async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const { nombre, edad, correo, preferencias } = req.body;

    // Verificar si el usuario existe en la base de datos
    const usuarioExistente = await Usuario.findById(usuarioId);
    if (!usuarioExistente) {
      return res.status(404).json({ error: "El usuario no existe" });
    }

    // Actualizar los campos del usuario excluyendo el username y el password
    usuarioExistente.nombre = nombre || usuarioExistente.nombre;
    usuarioExistente.edad = edad || usuarioExistente.edad;
    usuarioExistente.correo = correo || usuarioExistente.correo;
    usuarioExistente.preferencias = preferencias || usuarioExistente.preferencias;

    // Guardar los cambios en el usuario
    const usuarioActualizado = await usuarioExistente.save();

    // Enviar una respuesta de éxito con el usuario actualizado
    res.json(usuarioActualizado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
