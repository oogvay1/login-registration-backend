import express from "express";
import dotenv from "dotenv";
import connectDB from "./libs/db.js";
import morgan from "morgan";
import cors from "cors";

import userRoutes from "./routes/auth.route.js"
import uploadRoutes from "./routes/upload.route.js"

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/upload', uploadRoutes);
app.use('/users', userRoutes);
// app.use('/chat', chat);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});