const http = require("http");
const { readFileSync } = require("fs");

// https://stackoverflow.com/questions/23714383/what-are-all-the-possible-values-for-http-content-type-header

const homePage = readFileSync("./Course-Website/index.html", "utf-8");
const style = readFileSync("./Course-Website/css/style.css", "utf-8");
const js = readFileSync("./Course-Website/js/index.js", "utf-8");
const heroImg = readFileSync(
  "./Course-Website/images/header-shape.svg",
  "utf-8"
);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(js);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(heroImg);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found");
    res.end();
  }
});

server.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);
