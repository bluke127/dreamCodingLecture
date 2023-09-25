import { client } from "./sanity";
type OAuthuser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};
export async function addUser({ id, username, email, name, image }: OAuthuser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}
