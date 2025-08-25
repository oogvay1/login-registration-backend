import mongoose from "mongoose";

export default async function connectDB() {
    const URL = process.env.MONGO_URI

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error.message);
    }
}