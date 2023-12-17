import QuestionModel from "../models/question.js";

const INSERT_QUESTION = async (req, res) => {
  try {
    const currentDate = new Date();

    // Get the current date components
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are 0-indexed
    const day = currentDate.getDate().toString().padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = year + "-" + month + "-" + day;

    const question = new QuestionModel({
      question_title: req.body.question_title,
      question_text: req.body.question_text,
      date: formattedDate,
      user_id: req.body.userId,
    });

    // ticket.id = ticket._id;

    const response = await question.save();

    return res.status(201).json({ response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "Something went wrong" });
  }
};

const GET_ALL_QUESTIONS = async (req, res) => {
  try {
    const questions = await QuestionModel.find().sort({ date: "asc" });
    return res.status(201).json({ questions: questions });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const DELETE_QUESTION = async (req, res) => {
  try {
    const question = await QuestionModel.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    if (req.body.userId === question.user_id) {
      const response = await QuestionModel.deleteOne({ _id: req.params.id });
      return res.status(200).json({ response: response });
    } else {
      return res
        .status(403)
        .json({
          message:
            "Unauthorized: User does not have permission to delete this question",
        });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { INSERT_QUESTION, GET_ALL_QUESTIONS, DELETE_QUESTION };
