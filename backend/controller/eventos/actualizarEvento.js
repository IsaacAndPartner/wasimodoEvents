const { Router } = require("express");
const evento = require("../../models/evento");

exports.default = Router({ mergeParams: true }).put("/events/:id", async (req, res) => {
  try {
    const eventoId = req.params.id;
    const datosActualizados = req.body;
    const eventoModificado = await evento.findByIdAndUpdate(eventoId, datosActualizados, { new: true });
    res.send(eventoModificado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
