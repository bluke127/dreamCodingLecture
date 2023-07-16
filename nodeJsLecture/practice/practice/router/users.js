import express from "express";
import * as usersController from "../controller/users.js";
const router = express.Router();
router.post("/signup", [], usersController.signup);
router.post("/login", [], usersController.login);
export default router;
