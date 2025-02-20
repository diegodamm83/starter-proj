import express from "express";
import {
  login,
  logout,
  signup,
  getMe,
} from "../controllers/auth.controllers.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login successful");
});

router.post("/signup", signup);
export default router;

router.post("/login", login);

router.get("/me", protectRoute, getMe);
