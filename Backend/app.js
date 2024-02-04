const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const userRoutes = require("./routes/user");
const booksRoutes = require("./routes/book");
// lien pour connecter avec MongoDB
mongoose
  .connect(process.env.USER_MDP_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTION"
  );
  next();
});

app.use("/api/auth", userRoutes);
app.use("/api/books", booksRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));
module.exports = app;
