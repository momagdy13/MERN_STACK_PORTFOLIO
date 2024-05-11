const mongoo = require("./Config/mongoodb");
const express = require("express");
const projectRouter = require("./Routes/myProjects");
const app = express();

app.use("/api/apps", projectRouter);

app.get("/", (req, res) => {
  res.send("Server Is ready");
});
app.listen("4000", () => {
  console.log("Server Running");
});
