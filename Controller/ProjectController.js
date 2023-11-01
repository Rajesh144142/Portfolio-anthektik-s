const ProjectModel = require('../Models/ProjectModel')
// Creat new Post
const createPost = async (req, res) => {
  const newProjectModel = new ProjectModel(req.body);
  try {
    await newProjectModel.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
};
const getPost = async (req, res) => {
  try {
    const postProjectModel = await ProjectModel.find();
    res.status(200).json(postProjectModel);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.body;
    const postProjectModel = await ProjectModel.delete({ id });
    res.status(200).json(postProjectModel);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updatedPost = async (req, res) => {
  try {
    const { id, projectName, description, githubLink, liveLink, image1, image2, image3 } = req.body;
    if (!id) return res.status(400).json({ msg: "Id must be provided...." })
    const postProjectModel = await ProjectModel.findOne({ _id: id });
    if (projectName) {
      await postProjectModel.updateOne({ projectName: projectName });
    }
    if (description) {
      await postProjectModel.updateOne({ description });
    }
    if (githubLink) {
      await postProjectModel.updateOne({ githubLink });

    }
    if (liveLink) {
      await postProjectModel.updateOne({ liveLink });
    }
    if (image1) {
      await postProjectModel.updateOne({ image1 });

    }
    if (image2) {
      await postProjectModel.updateOne({ image1 });

    }
    if (image3) {
      await postProjectModel.updateOne({ image1 });

    }

    res.status(200).json({ msg: " the post is Updated......" });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  createPost,
  getPost,
  deletePost,
  updatedPost
};