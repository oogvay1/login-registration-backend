import express from "express";
import {
    getUser,
    login,
    logout,
    signup,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.get('/', protect, getUser);

export default router
