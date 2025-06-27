const http = require("node:http");

// creating server
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no seceret Data");
  }

  res.end("Hello World!");
});

// server is ready to listen in this port number
server.listen(7777);
