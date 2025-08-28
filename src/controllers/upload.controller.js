import cloudinary from "../config/cloudinary.js";
import fs from "fs"
import savePost from "../utils/savePost.js";

const uploadFile = async (req, res) => {
    const { userId, description } = req.body;

    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
        });

        fs.unlinkSync(req.file.path);

        savePost(userId, description, result)

        res.json({ url: result.secure_url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default uploadFile
