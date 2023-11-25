const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
     email: {
      type: String,
      required: true,
    }
    
  },
  {
    timestamps: {
      currentTime: () => new Date(),
    },
  }
);


const ProjectModel = mongoose.model("project", projectSchema);

module.exports = { ProjectModel };
