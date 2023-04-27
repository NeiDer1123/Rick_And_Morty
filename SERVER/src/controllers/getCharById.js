const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id);
    const { data } = response;
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
    res.status(500).json({ error: err.message });
  }
}

module.exports = getCharById;
