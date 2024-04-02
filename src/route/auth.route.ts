import express from "express";
const router = express.Router();
const { loginUser } = require("../controllers/UserController");

router.post("/login", loginUser);

export default router;
