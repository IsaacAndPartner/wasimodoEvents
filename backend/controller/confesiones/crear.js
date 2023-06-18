const { Router } = require("express");
const Confesion = require("../../models/confesiones");
const passport = require("passport");

exports.default = Router({ mergeParams: true }).post(
  "/confesiones",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userName = req.user;
      const { mensaje, color } = req.body;
      const propiedadesFaltantes = [];

      if (!userName) {
        propiedadesFaltantes.push("userName");
      }
      if (!mensaje) {
        propiedadesFaltantes.push("mensaje");
      }
      if (!color) {
        propiedadesFaltantes.push("color");
      }

      if (propiedadesFaltantes.length > 0) {
        return res.status(400).json({ error: `Falta(n) la(s) siguiente(s) propiedad(es): ${propiedadesFaltantes.join(", ")}` });
      }

      const nuevaConfesion = new Confesion({
        userName,
        mensaje,
        color,
        leido: false // Agregamos la propiedad "leido" con el valor predeterminado "false"
      });

      const confesionCreada = await nuevaConfesion.save();

      res.status(201).json(confesionCreada);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en el servidor");
    }
  }
);
