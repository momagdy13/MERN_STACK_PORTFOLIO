const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(process.env.URL_MONGO)
  .then(() => {
    console.log("Success Connect");
  })
  .catch((error) => {
    console.log(`error:`, error);
  });
