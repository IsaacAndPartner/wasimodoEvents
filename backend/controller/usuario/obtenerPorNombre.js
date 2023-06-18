const { Router } = require("express");
const passport = require("passport");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).get(
  "/usuarios/:param",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { param } = req.params;

      // Buscar usuarios por nombre o username en la base de datos
      const usuariosEncontrados = await Usuario.find({
        $or: [
          { nombre: { $regex: param, $options: "i" } },
          { userName: { $regex: param, $options: "i" } }
        ]
      });

      if (usuariosEncontrados.length === 0) {
        return res.status(404).json({ error: "No se encontraron usuarios" });
      }

      // Enviar una respuesta con los usuarios encontrados
      res.json(usuariosEncontrados);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en el servidor");
    }
  });
