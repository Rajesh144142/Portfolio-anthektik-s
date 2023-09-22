const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    projectName:String,
    desc: String,
    githubLink:String,
    liveLink:String,
    image1: String,
    image2: String,
    image3: String,

  },
  {
    timestamps: true,
  }
);
const ProjectModel = mongoose.model("Posts", ProjectSchema);
module.exports = ProjectModel;