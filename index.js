const express = require("express");
const controller = require("./controller");
require("dotenv").config();

const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;

app.get("/", controller.getNasaImage);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
