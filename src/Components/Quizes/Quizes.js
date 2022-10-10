import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizes = () => {
  const quiz = useLoaderData();

  return (
    <div>
      <h3>Quiz of {quiz.data.name}</h3>
      {quiz.data.questions.map((question) => (
        <Question key={question.id} question={question}></Question>
      ))}
    </div>
  );
};

export default Quizes;
