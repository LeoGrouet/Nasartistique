const axios = require("axios");

const controller = {
  getNasaImage: async (req, res) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=WxWXpraqDiHiQTY41onU4PddEqaojEKjDfk9kzig`
      );
      console.log(response.data.url);

      res.render("index");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving APOD from NASA API");
    }
  },
};

module.exports = controller;
