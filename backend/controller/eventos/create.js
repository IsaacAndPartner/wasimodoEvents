const { Router } = require("express");
const evento = require("../../models/evento");
// const passport = require("passport");

exports.default = Router({ mergeParams: true }).post(
  "/events",
//   passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
        const dataEvents = new evento(req.body);
        await dataEvents.save();
        res.send(dataEvents);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
  }
);