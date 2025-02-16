import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Login successful");
});

export default router;
