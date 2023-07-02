import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweet.js";
const router = express.Router();
let tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅",
    name: "Bob",
    username: "bob",
    // url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];
//GET /tweets
router.get("/", tweetController.getTweets);
//GET /tweets?username:username
//GET /tweets/:id
router.get("/:id", tweetController.getTweet);
//POST /tweets
router.post("/", tweetController.createTweet);
//PUT /tweets/:id
router.put("/:id", tweetController.updateTweet);
//DELETE /tweets/:id
router.delete("/:id", tweetController.deleteTweet);
export default router;
