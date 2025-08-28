import Post from "../models/posts.model.js";

export default async function savePost(id, description, other) {

    const newPost = await Post.create({
        userId: id,
        description: description,
        mediaUrl: other.secure_url,
        publicId: other.public_id,
        type: other.resource_type,
        createdAt: other.created_at
    });
}