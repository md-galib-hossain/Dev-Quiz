import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Options.css";

const Options = ({ option, correctAnswer }) => {
  const checkAnswer = (option) => {
    option === correctAnswer ? toast("Right Answer") : toast("Wrong Answer");
  };
  return (
    <div
      className="col-lg-6 col-sm-12 btn btn-primary gy-2 hover p-3 h-20 w-30"
      onClick={() => checkAnswer(option)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Options;
