import AnswerModel from "../models/answer.js";

const INSERT_ANSWER = async (req, res) => {
  try {
    const currentDate = new Date();

    // Get the current date components
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are 0-indexed
    const day = currentDate.getDate().toString().padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = year + "-" + month + "-" + day;

    const answer = new AnswerModel({
      answer_text: req.body.answer_text,
      date: formattedDate,
      gained_likes_number: 0,
      question_id: req.params.id,
      user_id: req.body.userId,
    });

    const response = await answer.save();

    return res.status(201).json({ response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "Something went wrong" });
  }
};

export { INSERT_ANSWER };
