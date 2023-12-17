import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question_title: { type: String, required: true },
  question_text: { type: String },
  date: { type: String, required: true },
  id: { type: String },
  user_id: { type: String, required: true },
});

export default mongoose.model("Question", questionSchema);
