import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.utils.js";

export const signup = asyncHandler(async (req, res) => {

    const { fullName, email, password } = req.body;
    const isExist = await User.findOne({ email: email });

    try {

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        }

        if (!password.length < 0) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        if (isExist) {
            return res.status(400).json({ message: "User is already exist" });
        }

        const user = await User.create({ fullName, email, password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid user Data');
        }
    } catch (error) {
        res.status(400).json({ message: "Server error" });
        console.error(error.message);
    }
});

export const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    try {

        if (user && (await user.matchPassword(password))) {

            return res.json({
                _id: user._id,
                name: user.fullName,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            req.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        res.status(400).json({message: "Server error"});
        console.error(error.message);
    }
});


export const getUser = asyncHandler(async (req, res) => {

    res.status(200).json(req.user);
});