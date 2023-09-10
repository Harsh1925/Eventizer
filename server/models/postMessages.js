import mongoose, { Schema } from "mongoose";

const postSchema = Schema({
    title: String,
    message: String,
    creator: String,
    Tags: [String],
    selectedFile: String,
    like: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage; 