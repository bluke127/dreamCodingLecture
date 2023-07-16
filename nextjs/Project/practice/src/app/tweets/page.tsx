"use client";
import { useEffect, useState } from "react";
type tweetType = { id?: number; content: string }[];
export default function Tweets() {
  const [newtweets, newsettweets] = useState<{ content: string }>({
    content: "",
  });
  const [tweets, settweets] = useState<tweetType>([]);
  const onchangeTweet = (e: any, tweet: any, idx: number) => {
    let res = tweets;
    res.map((item, index) => {
      if (tweet.id) {
        if (tweet.id === item.id) {
          item.content = e.target.value;
        }
      } else return item.content;
    });
    settweets((tweets: tweetType) => [...res]);
  };
  const addRow = () => {
    let res: { content: string }[] = tweets;
    res.push({ content: "" });
    settweets((tweets: tweetType) => [...res]);
  };
  return (
    <>
      {JSON.stringify(tweets)}
      <button onClick={addRow}>추가</button>
      <br />
      <button>저장</button>
      <div>
        <input
          value={newtweets.content}
          onChange={(e) => newsettweets({ content: e.target.value })}
        ></input>
      </div>
      <div>
        {tweets.map((tweet, idx) => (
          <input
            value={tweet.content}
            onChange={(e) => onchangeTweet(e, tweet, idx)}
          ></input>
        ))}
      </div>
    </>
  );
}
