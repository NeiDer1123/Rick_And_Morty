# SERVER CREADO SIN USAR EXPRESS

```Js
const http = require("http");
// const data = require("./src/utils/data");
const PORT = 3001;
const getCharById = require("./src/controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // if (req.url.includes("/rickandmorty/character")) {
    //   const id = req.url.split("/").pop();
    //   // const id = req.url.split("/").at(-1); ---> OTRA FORMA
    //   const char = data.find((char) => char.id == id);
    //   // const char = data[id-1]; ---> OTRA FORMA
    //   // const char = data.filter((char)=> char.id == id)[0] ---> OTRA FORMA
    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   res.end(JSON.stringify(char));

    //   return;
    // }
    // res.end(404)

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      getCharById(res, id);

      return;
    }

    res.end(404);
  })
  .listen(PORT, "localhost");
```

# FUNCTION getCharById

```Js
const axios = require("axios");

function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}

module.exports = getCharById
```

# FUNCTION getCharById version PROMESAS

```Js

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
```