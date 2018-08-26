const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server
    .use(cors({ origin: "*" }))
    .use(bodyParser.json())
    .get("/a", (req, res) => {
      return res.send({ message: "a" });
    })
    .get("/b", (req, res) => {
      return res.send({ message: "b" });
    })
    .get("/posts/:id", (req, res) => {
      return res.send({ message: "p" });
    })
    .use(handle);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
