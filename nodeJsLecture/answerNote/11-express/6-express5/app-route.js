import express from "express";
import postRouter from "./router/post";
import userRouter from "./router/user";
const app = express();
app.use(express.json());
app.use("/post", postRouter);
app.use("/users", userRouter);
app
  .get("/posts", (req, res) => {
    res.status(201).send("GET:/posts");
  })
  .post((req, res) => {
    res.status(201).send("POST:/posts");
  })
  .put((req, res) => {
    res.status(201).send("PUT:/posts");
  })
  .delete((req, res) => {
    res.status(201).send("delete:/posts");
  });
app.listen(8080);
