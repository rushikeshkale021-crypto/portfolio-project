const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const Project = require("./models/Project");

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.listen(3000, () => {
    console.log("Server started");
});
