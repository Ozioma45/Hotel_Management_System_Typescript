import express from "express";
const router = express.Router();
const { loginUser } = require("../controllers/user.controller");

router.post("/login", loginUser);

export default router;
