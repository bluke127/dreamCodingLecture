let tweets = [{ content: "123" }, { content: "456" }];
export async function getAll() {
  return tweets;
}
export async function create(letter) {
  tweets.push({ content: letter });
}
