const express = require("express");
const controller = require("./front/controllers/controller");
require("dotenv").config();

const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;

// Configuration du moteur de vue
app.set("view engine", "ejs");

// Définissez le répertoire des vues (templates)
app.set("views", __dirname + "/views");

app.get("/", controller.homepage);
app.get("/imagedujour", controller.getNasaImage);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
