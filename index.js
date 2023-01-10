const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const dotenv = require("dotenv");
dotenv.config();

connectToDb();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded()); // para poder ler formularios do body do ejs
app.use(routes);

app.listen(port, () =>
  console.log(`Server listening on http://127.0.0.1:${port}`)
);
