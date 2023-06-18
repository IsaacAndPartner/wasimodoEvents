const { Router } = require("express");
const Confesion = require("../../models/confesiones");
const passport = require("passport");

exports.default = Router({ mergeParams: true }).get(
  "/confesiones/no-leidas",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      // Obtener una confesión no leída
      const confesionNoLeida = await Confesion.findOne({ leido: false });

      if (confesionNoLeida) {
        // Marcar la confesión como leída
        confesionNoLeida.leido = true;
        await confesionNoLeida.save();
      }

      // Obtener el número de confesiones no leídas
      const numeroConfesionesNoLeidas = await Confesion.countDocuments({ leido: false });

      if (confesionNoLeida) {
        res.status(200).json({
          confesion: confesionNoLeida,
          numeroConfesionesNoLeidas
        });
      } else {
        res.status(200).json({
          numeroConfesionesNoLeidas
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en el servidor");
    }
  }
);
