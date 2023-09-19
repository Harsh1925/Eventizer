import express from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

//So even here address is "/" but we have mentaioned posts in index.js so here every address will start with http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;