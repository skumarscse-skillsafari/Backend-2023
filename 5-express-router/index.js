import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();
const PORT = 5000;

// app.use(express.static("./path"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("<h1>Express server created...</h1>");
// });
// baseRoute and imported route
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server is running in: http://localhost:${PORT}`)
);
