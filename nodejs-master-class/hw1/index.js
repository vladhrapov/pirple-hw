const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  const path = pathname.replace(/^\/+|\/+$/g, "");

  if (path === "hello") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ message: "hello world" }));
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
