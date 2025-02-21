import { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    const { fullName, username, email, password, confirmPassword, role } =
      req.body;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Password do not match" });
    }
    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res
        .status(400)
        .json({ msg: "User with that username already exists" });
    }
    const userEmail = await prisma.user.findUnique({ where: { username } });
    if (userEmail) {
      return res
        .status(400)
        .json({ msg: "User with that email already exists" });
    }

    // Password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Profile pictures
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy/?username{${username}}`;

    const newUserData: any = {
      fullName,
      username,
      email,
      password: hashedPassword,
      profilePic: boyProfilePic,
    };
    if (role) {
      newUserData.role = role;
    }
    const newUser = await prisma.user.create({
      data: newUserData,
    });

    if (newUser) {
      generateToken(newUser.id, res);

      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ error: "Server error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateToken(user.id, res);

    res.status(200).json({
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error: any) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "Logged out successfully" });
  } catch (error: any) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error: any) {
    console.log("Error in getMe controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
