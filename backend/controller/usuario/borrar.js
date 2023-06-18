const { Router } = require("express");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).delete("/usuarios/:id", async (req, res) => {
  try {
    const usuarioId = req.params.id;

    // Verificar si el usuario existe en la base de datos
    const usuarioExistente = await Usuario.findById(usuarioId);
    if (!usuarioExistente) {
      return res.status(404).json({ error: "El usuario no existe" });
    }

    // Eliminar el usuario de la base de datos
    await Usuario.findByIdAndRemove(usuarioId);

    // Enviar una respuesta de éxito
    res.json({ mensaje: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
