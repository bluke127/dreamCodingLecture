import * as tweetRepository from "../data/tweets.js";
export async function getTweets(req, res) {
  let data = tweetRepository.getAll();
  res.status(200).json(data);
}
