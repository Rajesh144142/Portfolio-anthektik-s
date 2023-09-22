const express = require("express");

const {
  createPost,
  deletePost,
  getPost,
  updatePost,
} = require("../Controller/ProjectController");
const router = express.Router();

router.post("/", createPost);
router.get("/:postid", getPost);
router.put("/:postid", updatePost);
router.delete("/:postid", deletePost);
router.get("/", getAllPost);

module.exports = router;
