const { json } = require("body-parser");
const express = require("express");
const path = require("path");


const app = express();
const port = 3000;



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () =>
  console.log(`Server listening on http://127.0.0.1:${port}`)
);
