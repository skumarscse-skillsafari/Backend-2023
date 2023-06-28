import express from "express";
const app = express();

// middleware
// It is a function which can be act as an intermediate between request and the response
// Parameters => req object, res object, next() function
const middlewareFun = (req, res, next) => {
  if (req.url === "/") {
    console.log("Url is valid");
    next();
  } else {
    res.status(400).send("<h1>Invalid URL</h1>");
  }
};

const middlewareFunTwo = (req, res, next) => {
  if (req.url === "/about") {
    next();
  } else {
    res.send("<h1>Invalid about page</h1>");
  }
};

const middlewareFunThree = (req, res, next) => {
  const { username } = req.query;
  if (username === "John") {
    req.user = username;
    next();
  } else {
    res.status(400).send("<h1>Invalid user");
  }
};

const middlewareFour = (req, res, next) => {
  console.log("Middleware Four");
  next();
};

const middlewareFive = (req, res, next) => {
  console.log("Middleware Five");
  next();
};

app.get("/", middlewareFun, (req, res) => {
  res.status(200).send("<h1>Home Page...</h1>");
});

app.get("/about", middlewareFunTwo, (req, res) => {
  res.status(200).send("<h1>About Page...</h1>");
});

app.get("/user", middlewareFunThree, (req, res) => {
  const username = req.user;
  res.status(200).send(`<h1>Welcome, ${username}...</h1>`);
});

app.get("/test", [middlewareFour, middlewareFive], (req, res) => {
  res.status(200).json({
    message: "success",
    data: "Testing middlewareFour and middlewareFive",
  });
});

app.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);
