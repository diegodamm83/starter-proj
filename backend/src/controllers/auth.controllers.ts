import { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcrypt from "bcryptjs";

export const login = async (req: Request, res: Response) => {
  try {
    const { fullName, username, email, password, confirmPassword } = req.body;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Password do not match" });
    }
    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const userEmail = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return res
        .status(400)
        .json({ msg: "User with taht email already exists" });
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Profile pictures
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy/?username{${username}}`;
    res.send("Login successful");

    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        email,
        password: hashedPassword,
        profilePic: boyProfilePic,
      },
    });
    if (newUser) {
      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ error: "Serve error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
export const register = (req: Request, res: Response) => {};
export const logout = (req: Request, res: Response) => {};
