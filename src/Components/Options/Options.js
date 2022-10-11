import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Options.css";

const Options = ({ option, correctAnswer }) => {
  const checkAnswer = () => {
    option === correctAnswer ? toast("Right Answer") : toast("Wrong Answer");
  };
  return (
    <div
      className="col-lg-6 col-sm-12 option hover btn"
      onClick={() => checkAnswer(option)}
    >
      <p>{option}</p>
      <ToastContainer />
    </div>
  );
};

export default Options;
