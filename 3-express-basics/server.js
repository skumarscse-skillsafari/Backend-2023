import express from "express";
import { products, users } from "./data.js";
const app = express();

const PORT = 5000;

// app.use(express.static("./Course-Website"));
app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map(({ id, title, description, image }) => {
    return { id, title, description, image };
  });
  res.status(200).json(newProducts);
});

// params
app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res
      .status(404)
      .json({ response: false, message: "Product not found" });
  }
  res.status(200).json(singleProduct);
});

app.get("/api/products/:productID/review/:reviewID", (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: "test" });
});

// query
app.get("/api/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.title.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({
      response: "success",
      message: "No products matches the condition",
    });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Something went wrong</h1>");
});

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
