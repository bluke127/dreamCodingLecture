import express from "express";
import morgan from "morgan";
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(8080);
