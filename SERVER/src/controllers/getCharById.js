const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

function getCharById(req, res) {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then((response) => response.data)
    .then((data) => {
      try {
        const character = {
          id: data.id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin.name,
          image: data.image,
          status: data.status,
        };
        res.status(200).json(character);
      } catch (error) {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
}

module.exports = getCharById;
