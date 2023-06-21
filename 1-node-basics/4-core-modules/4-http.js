const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   console.log(res);
  if (req.url === "/") {
    res.end("<h1>Welcome to Node.js</h1>");
  }

  if (req.url === "/user") {
    res.end("<h2>Welcome, John</h2>");
  }
});

server.listen(5000, () =>
  console.log(`Server is running in: http://localhost:5000`)
);
