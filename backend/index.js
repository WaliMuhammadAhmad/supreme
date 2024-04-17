const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// User schema
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: String,
    review: String,
  },
  {
    timestamps: true,
  }
);

// Admin schema
const adminSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Project schema
const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    projectName: String,
    type: String,
    color: String,
    endDate: Date,
    budget: Number,
    email: String,
    keywords: String,
    file: String,
    progress: Number,
    status: String,
    isCompleted: Boolean,
    completedFile: String,
  },
  {
    timestamps: true,
  }
);

// Slides schema
const slidesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: String,
    image: String,
    video: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const projectModel = mongoose.model("Project", projectSchema);
const slidesModel = mongoose.model("Slides", slidesSchema);

// module.exports = { User, Admin, Project, Slides };
// ​"http://localhost:8080/"
// user CRUD
//return all users
app.get("/user", async (req, res) => {
  try {
    const user = await userModel.find({});
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
// return specific user
app.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userModel.findOne({ _id: userId });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post("/createuser", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.put("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
//post review
app.put("/userreview/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { review } = req.body;
    console.log(req.body);
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { review },
      { new: true }
    );
    console.log(updatedUser)
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: "User Review Posted successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/user/delete", async (req, res) => {
  try {
    const userId = req.body.id;
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
// admin CRUD
app.get("/admin", async (req, res) => {
  try {
    const admin = await adminModel.find({});
    res.json({ success: true, data: admin });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post("/createadmin", async (req, res) => {
  try {
    const admin = new adminModel(req.body);
    await admin.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.put("/admin/:id", async (req, res) => {
  try {
    const adminId = req.params.id;
    const updatedAdmin = await adminModel.findByIdAndUpdate(adminId, req.body, {
      new: true,
    });
    if (!updatedAdmin) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      message: "User updated successfully",
      data: updatedAdmin,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/admin/delete", async (req, res) => {
  try {
    const adminId = req.params.id;
    const deletedAdmin = await adminModel.findByIdAndDelete(adminId);
    if (!deletedAdmin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }
    res.json({
      success: true,
      message: "Admin deleted successfully",
      data: deletedAdmin,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
// project CRUD
app.get("/projects", async (req, res) => {
  try {
    const projects = await projectModel.find({});
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.put("/project/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedProject = await projectModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updatedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/createproject", async (req, res) => {
  try {
    const newProject = new projectModel(req.body);
    await newProject.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.get("/project/:Id", async (req, res) => {
  try {
    const _id = req.params.Id;
    console.log(_id)
    const projects = await projectModel.find({ userId: _id });
    console.log(projects)
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post("/project/delete", async (req, res) => {
  try {
    const userId = req.body.id;
    const deletedProject = await projectModel.findByIdAndDelete(userId);
    if (!deletedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.json({
      success: true,
      message: "Project deleted successfully",
      data: deletedProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
//slide CRUD
app.get("/slides", async (req, res) => {
  try {
    const slides = await slidesModel.find({});
    res.json({ success: true, data: slides });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post("/createslide", async (req, res) => {
  try {
    const newSlide = new slidesModel(req.body);
    await newSlide.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newSlide,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.put("/slide/:id", async (req, res) => {
  try {
    const slideID = req.params.id;
    const updatedSlide = await slidesModel.findByIdAndUpdate(
      slideID,
      req.body,
      { new: true }
    );
    if (!updatedSlide) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      message: "User updated successfully",
      data: updatedSlide,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
app.post("/slide/delete", async (req, res) => {
  try {
    const slideId = req.body.id;
    const deletedSlide = await slidesModel.findByIdAndDelete(slideId);
    if (!deletedSlide) {
      return res
        .status(404)
        .json({ success: false, message: "Slide not found" });
    }
    res.json({
      success: true,
      message: "Slide deleted successfully",
      data: deletedSlide,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
// signin api
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Email not found!" });
    } else {
      if (user.password === password) {
        // res.cookie('userCookie', user._id.toString(), { httpOnly: true });
        return res
          .status(200)
          .json({ success: true, message: "Sign in successful", user: user  });
      }
    }

    return res
      .status(401)
      .json({ success: false, message: "Password not matched!" });
  } catch (error) {
    console.error("Sign in error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

mongoose
  .connect("mongodb://localhost:27017/supreme")
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));
