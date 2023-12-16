import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./src/routes/user.js";
import questionRoute from "./src/routes/question.js";

import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use(questionRoute);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("CONNECTED!!!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("App started");
});
