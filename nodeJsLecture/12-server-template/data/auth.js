import { db } from "../db/database.js";
export async function findByUsername(username) {
  // return users.find((user) => {
  //   return user.name === username;
  // });
  return null;
}

export async function findById(id) {
  // return users.find((user) => user.id === id);
  return null;
}

export async function createUser(user) {
  const { username, password, name, email, url } = user;
  return db
    .execute(
      "INSERT INTO users (username,password,name,email,url) VALUES (?,?,?,?,?)",
      [username, password, name, email, url]
    )
    .then((result) => {
      console.log(result);
      return result[0].insertId;
    });
}
