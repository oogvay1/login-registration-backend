import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        description: {type: String, required: true},
        mediaUrl: {type: String, required: true},
        publicId: {type: String, required: true},
        type: {type: String, required: true},
        createdAt: {type: String, required: true}
    },
    {timestamps: true}
);

const Post = mongoose.model("Posts", PostSchema);

export default Post
