const { Router } = require("express");
const passport = require("passport");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).get(
  "/usuarios/profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      // El nombre de usuario autenticado se encuentra en req.user.userName
      const userName = req.user;
      console.log(userName)

      // Buscar el usuario en la base de datos
      const usuario = await Usuario.findOne({ userName });

      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      res.status(200).json(usuario);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en el servidor");
    }
  }
);
