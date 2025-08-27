import mongoose from "mongoose";

export default async function connectDB() {
    const URL = process.env.MONGO_URI

    try {
        await mongoose.connect(URL);

        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB is not connected');
    }
}