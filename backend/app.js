const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const passport = require("passport");

const strategyJWT = require("./config/passport");
const Routes = require("./routes/router");
const conectarDB = require("./config/db");
const app = express();
conectarDB();

// Health check
app.get("/health", (req, res) =>
  res.status(200).send("Wasimodo API is running!")
);

// Middlewares
app
  .use(helmet())
  .use(cors({ credentials: true }))
  .use(
    morgan((tokens, req, res) => {
      const morganConfig = [
        `Remote Address: ${req.ip}` || req.connection.remoteAddress,
        `Method: ${tokens.method(req, res)}`,
        `URL: ${tokens.url(req, res)}`,
        `Params: ${JSON.stringify(req.params)}`,
        `Body: ${JSON.stringify(req.body)}`,
        `Status: ${tokens.status(req, res)}`,
        `Response Time: ${tokens["response-time"](req, res)}ms`,
      ];
      return morganConfig.join(`||`);
    })
  )
  .use(urlencoded({ extended: true, limit: "50mb" }))
  .use(json({ limit: "50mb" }));

//Using Passport and the passport strategy
strategyJWT(passport);
app.use(passport.initialize());


app.use("/", Routes.default);
// Error Handler



app.use((error, req, res, next) => {
  console.error(error);
  res
    .status(error.status || 500)
    .json({ error: error.message || "Internal System Error" });
});

app.listen(4002, () => {
    console.log(`El servidor esta ejecutando en http://localhost:4002`)
})
