import mongoose from "mongoose";
import PostMessage from "../models/PostMessages.js";

export const getPosts = async (req, res) => {
    try {

        const PostMessages = await PostMessage.find();

        res.status(200).json(PostMessages);

    } catch (error) {
        res.status(405).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updatePost = async (req, res) => {

    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with this id");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.status(201).json(updatedPost);

}

export const deletePost = async (req, res) => {

    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with this id");

    const deletedPost = await PostMessage.findByIdAndRemove(_id)

    res.status(201).json({ message: "Post deleted successfully" });

}