import express from "express";
import cors from "cors";
import "express-async-errors";
import * as tweetsRoute from "./router/tweets.js";
// import authRoute from "./router/auth.js";
import { Server } from "socket.io";
import { initSocket } from "./connection/socket.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});
const server = app.listen(8080);
