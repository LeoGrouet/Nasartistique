const axios = require("axios");

const controller = {
  homepage: async (req, res) => {
    res.render("index");
  },

  getNasaImage: async (req, res) => {
    try {
      const responseAPOD = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=WxWXpraqDiHiQTY41onU4PddEqaojEKjDfk9kzig`
      );
      console.log(responseAPOD.data);
      // Passer l'URL de l'image à la vue
      const APODdata = responseAPOD.data;
      res.render("pictureOfTheDay", { APODdata });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving APOD from NASA API");
    }
  },
  // getNasaAsteroidNews: async (req, res) => {
  //   try {
  //     const responseFEED = await axios.get(
  //       `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key==WxWXpraqDiHiQTY41onU4PddEqaojEKjDfk9kzig`
  //     );
  //     console.log("oivob", responseFEED);
  //     const FEEDdata = responseFEED.data;
  //     res.render("index", { FEEDdata });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Error retrieving FEED from NASA API");
  //   }
  // },
};

module.exports = controller;
