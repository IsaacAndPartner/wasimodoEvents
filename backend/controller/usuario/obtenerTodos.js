const { Router } = require("express");
const Usuario = require("../../models/usuario");

exports.default = Router({ mergeParams: true }).get("/usuarios", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;

    // Calcular el índice de inicio y fin para la paginación
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    // Obtener la cantidad total de usuarios en la base de datos
    const totalUsuarios = await Usuario.countDocuments();

    // Obtener los usuarios de la página actual
    const usuarios = await Usuario.find()
      .skip(startIndex)
      .limit(pageSize);

    // Crear objeto de paginación
    const pagination = {
      currentPage: pageNumber,
      totalPages: Math.ceil(totalUsuarios / pageSize),
      pageSize: pageSize,
      totalUsuarios: totalUsuarios
    };

    // Enviar una respuesta con los usuarios y la información de paginación
    res.json({ usuarios, pagination });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
