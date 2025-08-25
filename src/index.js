import express from "express";
import dotenv from "dotenv";
import connectDB from "./libs/db";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});