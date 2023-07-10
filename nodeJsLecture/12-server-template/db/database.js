import mysql from "mysql2";
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "dwitter",
  password: "1234",
}); // db접속

export const db = pool.promise();
