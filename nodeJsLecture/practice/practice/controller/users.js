import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/users.js";
import { token } from "morgan";
export async function createJwtToken(id) {
  return await jwt.sign({ id }, "OW35k6D!^!4DWlT%GKW8&4cQtL7L&Xo&*$i&", {
    expiresIn: 12,
  });
}
export async function signup(req, res) {
  const { userId, password } = req.body;
  const found = await userRepository.findById(userId);
  if (found) {
    return res.status(409).json({ message: `${userId}는 이미 있다` });
  }
  const hashed = await bcrypt.hash(password, 12);
  const _userId = await userRepository.createUser({ userId, password: hashed });
  const token = createJwtToken(_userId);
  return res.status(201).json({ token, userId });
}
export async function login(req, res) {
  const { userId, password } = req.body;

  const user = await userRepository.findById(userId);
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password00" });
  }
  createJwtToken(user.userId).then((token) => {
    res.status(200).json({ token, userId });
  });
  return;
  console.log(token);
  res.status(200).json({ token, userId });
}
