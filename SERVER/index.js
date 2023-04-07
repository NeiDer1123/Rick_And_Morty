const http = require("http");
const data = require("./src/utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      const char = data[id-1];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(char));
    }
    // res.end("hola")
  })
  .listen(PORT, "localhost");
