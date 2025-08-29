import express from "express";
import multer from "multer";
import uploadFile from "../controllers/upload.controller.js";
import { protect } from "../middlewares/protect.middleware.js";
import getPosts from "../utils/getPosts.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", protect, upload.single("file"), uploadFile);
router.post('/posts', protect, getPosts);

export default router;
