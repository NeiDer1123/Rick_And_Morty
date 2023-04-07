const http = require("http");
const data = require("./src/utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      // const id = req.url.split("/").at(-1); ---> OTRA FORMA
      const char = data.find((char) => char.id == id);
      // const char = data[id-1]; ---> OTRA FORMA
      // const char = data.filter((char)=> char.id == id)[0] ---> OTRA FORMA
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(char));

      return;
    }
    res.end(404)
  })
  .listen(PORT, "localhost");
