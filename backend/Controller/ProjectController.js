const ProjectModel =require('../Models/ProjectModel')
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
      const postProjectModel = await ProjectModel.find({});
      res.status(200).json(postProjectModel);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  module.exports = {
    createPost,
    getPost
  };