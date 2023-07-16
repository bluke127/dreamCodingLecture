import { db } from "../db/database.js";
export async function findById(id) {
  return db
    .execute("SELECT * FROM users where userId=?", [id])
    .then((result) => result[0][0]);
}
export async function createUser(user) {
  const { userId, password } = user;
  return db
    .execute("INSERT INTO users (userId,password) VALUES (?,?)", [
      userId,
      password,
    ])
    .then((res) => res[0].insertId);
}
