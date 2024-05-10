const express = require("express");
const myProjects = require("../models/myProjects.js");

const router = express.Router();

router.post("/myproject", async (req, res) => {
  const { image, descripe, title, url, time } = req.body;
  const project = new myProjects({
    image,
    descripe,
    title,
    url,
    time,
  });
  await project.save();
  res.json({ project }, "Success");
});

module.exports = router;
