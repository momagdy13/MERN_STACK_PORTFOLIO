const monoose = require("mongoose");

const projectsSchema = monoose.Schema({
  image: { type: String, require: true },
  descripe: { type: String, require: true },
  title: { type: String, require: true },
  url: { type: String, require: true },
  time: { type: String, require: true },
});

module.exports = monoose.model("webprojet", projectsSchema);
