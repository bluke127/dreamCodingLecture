import express from "express";
import "express-async-errors";
import * as tweetController from "../controller/tweets.js";
const router = express.Router();
router.get("/tweets", tweetController.getTweets);
