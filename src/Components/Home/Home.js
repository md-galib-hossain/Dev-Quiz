import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const Home = () => {
  const quizes = useLoaderData();

  return (
    <div className="container">
      <div className="row">
        {quizes.data.map((quiz) => (
          <Cards key={quiz.id} quiz={quiz}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
