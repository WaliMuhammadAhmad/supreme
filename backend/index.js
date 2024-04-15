const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

// User schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    pic: String,
    review: String
}, {
    timestamps: true
});

// Admin schema
const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Project schema
const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    projectName: String,
    type: String,
    color: String,
    endDate: Date,
    budget: Number,
    email: String,
    keywords: String,
    file: String,
    progress: {
        phase1: Number,
        phase2: Number,
        phase3: Number,
        phase4: Number
    },
    isCompleted: Boolean,
    status: String
}, {
    timestamps: true
});

// Slides schema
const slidesSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    video: String
}, {
    timestamps: true
});

const userModel = mongoose.model('User', userSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const projectModel = mongoose.model('Project', projectSchema);
const slidesModel = mongoose.model('Slides', slidesSchema);

// module.exports = { User, Admin, Project, Slides };
// ​"http://localhost:8080/"
// user CRUD 
app.get("/user", async (req, res) => {
    try {
        const user = await userModel.find({});
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
app.post("/createuser", async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({ success: true, message: "User created successfully", data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.put("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User updated successfully", data: updatedUser });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.delete("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User deleted successfully", data: deletedUser });
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
        res.status(201).json({ success: true, message: "User created successfully", data: admin });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.put("/admin/:id", async (req, res) => {
    try {
        const adminId = req.params.id;
        const updatedAdmin = await adminModel.findByIdAndUpdate(adminId, req.body, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User updated successfully", data: updatedAdmin });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.delete("/admin/:id", async (req, res) => {
    try {
        const adminId = req.params.id;
        const deletedAdmin = await adminModel.findByIdAndDelete(adminId);
        if (!deletedAdmin) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User deleted successfully", data: deletedAdmin });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// project CRUD
app.get("/project", async (req, res) => {
    try {
        const project = await projectModel.find({});
        res.json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
app.post("/createproject", async (req, res) => {
    try {
        const newProject = new projectModel(req.body);
        await newProject.save();
        res.status(201).json({ success: true, message: "User created successfully", data: newProject });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.put("/project/:id", async (req, res) => {
    try {
        const projectId = req.params.id;
        const updatedProject = await projectModel.findByIdAndUpdate(projectId, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User updated successfully", data: updatedProject });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.delete("/project/:id", async (req, res) => {
    try {
        const projectId = req.params.id;
        const deletedProject = await projectModel.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User deleted successfully", data: deletedProject });
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
        res.status(201).json({ success: true, message: "User created successfully", data: newSlide });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.put("/slide/:id", async (req, res) => {
    try {
        const slideID = req.params.id;
        const updatedSlide = await slidesModel.findByIdAndUpdate(slideID, req.body, { new: true });
        if (!updatedSlide) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User updated successfully", data: updatedSlide });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
app.delete("/slide/:id", async (req, res) => {
    try {
        const slideId = req.params.id;
        const deletedSlide = await slidesModel.findByIdAndDelete(slideId);
        if (!deletedSlide) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, message: "User deleted successfully", data: deletedSlide });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

mongoose.connect("mongodb://localhost:27017/supreme")
    .then(() => {
        console.log("connected to DB")
        app.listen(PORT, () => console.log("Server is running"))
    })
    .catch((err) => console.log(err))