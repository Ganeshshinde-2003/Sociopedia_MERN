import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js"
import { verifyTOken } from "../middleware/auth.js";

const router = express.Router();

//READ
router.get("/", verifyTOken, getFeedPosts);
router.get("/:userId/posts", verifyTOken, getUserPosts);

//UPDATE
router.patch("/:id/like", verifyTOken, likePost);

export default router;