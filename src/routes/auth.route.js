import express from "express";
import {
    getUser,
    login,
    signup
} from "../controllers/auth.controller.js";
import { admin, protect } from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/', protect, getUser);

export default router
