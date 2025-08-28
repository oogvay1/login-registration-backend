import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        
    }
)