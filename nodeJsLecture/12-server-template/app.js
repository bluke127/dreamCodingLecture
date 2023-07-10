import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
import tweetsRoute from "./router/tweets.js";
import authRoute from "./router/auth.js";
import { Server } from "socket.io";
import { initSocket } from "./connection/socket.js";
import { db } from "./db/database.js";
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use("/tweets", tweetsRoute);
app.use("/auth", authRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});
console.log(process.env.JWT_EXPIRES_SEC);
const server = app.listen(8081);
// const socketIO = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });
// socketIO.on("connection", (socket) => {
//   console.log("client is here");
//   socketIO.emit("dwitter", "hello하트");
//   socketIO.emit("dwitter", "hello하트ㄴㄴ");
// });
db.getConnection().then((connection) => console.log(connection));
initSocket(server);
