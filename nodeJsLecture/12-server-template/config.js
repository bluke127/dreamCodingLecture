import dotenv from "dotenv";
dotenv.config();
function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`key ${key} is undefined`);
  }
  return value;
}
export const config = {
  jwt: {
    secretKey: required("JWT_SECRET"),
    expireInSec: Number(required("JWT_EXPIRES_SEC", 86400)),
  },
  bcrypt: {
    saltRounds: Number(required("BCRYRT_SALT_ROUNDS", 12)),
  },
  db: {
    host: required("localhost"),
    user: required("root"),
    database: required("dwitter"),
    password: required("1234"),
  },
};
