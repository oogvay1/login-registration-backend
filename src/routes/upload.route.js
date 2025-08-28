import express from "express";
import multer from "multer";
import uploadFile from "../controllers/upload.controller.js";
import { protect } from "../middlewares/protect.middleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", protect, upload.single("file"), uploadFile);

export default router;
