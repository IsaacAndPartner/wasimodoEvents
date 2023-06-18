const { Router } = require("express");
const evento = require("../../models/evento");

exports.default = Router({ mergeParams: true }).get("/events/:nombre", async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const eventoEncontrado = await evento.findOne({ nombre: nombre });
    res.send(eventoEncontrado);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});