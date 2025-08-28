import cloudinary from "../config/cloudinary.js";
import Post from "../models/posts.model.js";
import fs from "fs"

const uploadFile = async (req, res) => {
    try {
        console.log(req.body)
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
        });

        

        fs.unlinkSync(req.file.path);

        console.log(result);

        res.json({ url: result.secure_url });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default uploadFile
