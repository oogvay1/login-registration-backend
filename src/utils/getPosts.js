import Post from "../models/posts.model.js";

export default async function getPosts(req, res) {

    const { id } = req.body

    try {

        const posts = await Post.find({ userId: id });

        console.log(posts && posts);
    } catch (err) {

    }
}