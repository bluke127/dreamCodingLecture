export async function getTweets() {
  return (await fetch("http://localhost:8080/tweets")).json();
}
