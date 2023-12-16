const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  updatedPost

} = require("../Controller/ProjectController");
const auth = require('../middleware/verifyToken');

const router = express.Router();

router.post("/", createPost);
router.get("/",getPost);
router.put("/",auth, updatedPost);
router.delete("/",auth, deletePost);

// router.put("/:postid", updatePost);
// router.delete("/:postid", deletePost);
// router.get("/", getAllPost);

module.exports = router;
