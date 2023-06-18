const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../../models/usuario");
require('dotenv').config({path: 'config.env'})
const { API_KEY } = process.env;

exports.default = Router({ mergeParams: true }).post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findOne({ userName });
    if (!usuario) {
      return res.status(401).json({ error: "Credenciales 1 inválidas" });
    }

    // Verificar la contraseña
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({ error: "Credenciales 2 inválidas" });
    }

    // Generar el JWT
    const token = jwt.sign({ id: usuario._id }, API_KEY, { expiresIn: "1h" });

    // Enviar el JWT como respuesta
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en el servidor");
  }
});
