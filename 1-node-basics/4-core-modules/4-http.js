const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   console.log(res);
  if (req.url === "/") {
    res.end(`
      <h1>Welcome to Node.js</h1>
      <p>This is a home page.</p>
    `);
  }

  if (req.url === "/user") {
    res.end(`
      <h1>Welcome, John</h1>
      <a href="/">Back to home page</a>
    `);
  }
});

server.listen(5000, () =>
  console.log(`Server is running in: http://localhost:5000`)
);
