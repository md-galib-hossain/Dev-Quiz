import React from "react";
import Options from "../Options/Options";
import "./question.css";

const Question = (props) => {
  const { options, question, correctAnswer } = props.question;

  return (
    <div className="quesDiv container">
      <div className="row">
        <div className="col-12">
          <p>{question}</p>
        </div>
        {options.map((option) => (
          <Options key={option.id} option={option}></Options>
        ))}
      </div>
    </div>
  );
};
// kaj kortisilam
export default Question;
