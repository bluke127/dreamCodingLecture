import express from "express";
import "express-async-errors";
import * as tweetRepository from "../data/tweet.js";
const router = express.Router();
let tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅",
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];
//GET /tweets
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll(username);
  res.status(200).json(data);
});
//GET /tweets?username:username
//GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweetRepository.getAllByUsername(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});
//POST /tweets
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = tweetRepository.create(text, name, username);
  res.status(200).json(tweets);
});
//PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
});
//DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(201);
});
export default router;
