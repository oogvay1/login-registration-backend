import Post from "../models/posts.model.js";

export default async function getPosts(req, res) {

    try {
        const userId = req.user._id.toString();

        const posts = await Post.find({ userId });

        res.send(posts);
    } catch (err) {
        res.status(404).json({ message: "User id is not defined" });
    }
}