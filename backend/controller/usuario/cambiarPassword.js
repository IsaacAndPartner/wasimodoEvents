const { Router } = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).put("/usuarios/:id/cambiar-contrasena", async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const { oldPassword, newPassword } = req.body;

    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: "El usuario no existe" });
    }

    // Verificar la contraseña actual
    const passwordValido = await bcrypt.compare(oldPassword, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar el hash de la nueva contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Actualizar la contraseña en la base de datos
    usuario.password = hashedPassword;
    await usuario.save();

    // Enviar una respuesta de éxito
    res.json({ mensaje: "Contraseña cambiada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
