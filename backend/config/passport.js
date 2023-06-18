const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt; //Se extrae el Payload
const Usuario = require("../models/usuario");
require('dotenv').config({ path: 'config.env' })
const { API_KEY } = process.env;


module.exports = (passport) => {
  //Clave a la cabecera
  const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  const opts = {
    jwtFromRequest,
    secretOrKey: API_KEY,
  };
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      authenticatingInMongo(payload.id, done);
    })
  );
};

function authenticatingInMongo(id, done) {
  Usuario.findById(id)
    .exec()
    .then((user) => {
      if (user?.nombre) {
        return done(null, user.userName);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err, null));
}
