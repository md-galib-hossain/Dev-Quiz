import React from "react";
import Options from "../Options/Options";
import "./question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = (props) => {
  const { options, question, correctAnswer } = props.question;
  const showAnswer = () => {
    toast(correctAnswer);
  };
  return (
    <div className="quesDiv min-h-max container">
      <div className="row">
        <div className="col-12">
          <p>{question.slice(3, -4)}</p>
          <button className="btn my-2" onClick={showAnswer}>
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>
        {options.map((option) => (
          <Options correctAnswer={correctAnswer} option={option}></Options>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
