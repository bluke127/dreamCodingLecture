import express from "express";
const router = express.Router();
app.get("/posts", (req, res) => {
  res.status(201).send("GET:/posts");
});

app.post("/posts", (req, res) => {
  res.status(201).send("POST:/posts");
});
app.put("/posts", (req, res) => {
  res.status(201).send("PUT:/posts");
});
app.delete("/posts", (req, res) => {
  res.status(201).send("delete:/posts");
});
export default router;
