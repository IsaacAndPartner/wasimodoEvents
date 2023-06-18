const { Router } = require("express");
const evento = require("../../models/evento");

exports.default = Router({ mergeParams: true }).delete("/events/:id", async (req, res) => {
  try {
    const eventoId = req.params.id;
    await evento.findByIdAndRemove(eventoId);
    res.send("Evento eliminado exitosamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
