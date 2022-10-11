import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const Home = () => {
  const quizes = useLoaderData();

  return (
    <div className="container">
      <h2>Quiz Practice for React Developers</h2>

      <div className="row">
        {quizes.data.map((quiz) => (
          <Cards key={quiz.id} quiz={quiz}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
