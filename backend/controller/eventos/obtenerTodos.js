const { Router } = require("express");
const Evento = require("../../models/evento");

exports.default = Router({ mergeParams: true }).get("/events", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;

    // Calcular el índice de inicio y fin para la paginación
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    // Obtener la cantidad total de eventos en la base de datos
    const totalEventos = await Evento.countDocuments();

    // Obtener los eventos de la página actual
    const eventos = await Evento.find()
      .skip(startIndex)
      .limit(pageSize);

    // Crear objeto de paginación
    const pagination = {
      currentPage: pageNumber,
      totalPages: Math.ceil(totalEventos / pageSize),
      pageSize: pageSize,
      totalEventos: totalEventos
    };

    // Enviar una respuesta con los eventos y la información de paginación
    res.json({ eventos, pagination });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
