import React from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const questions = useLoaderData();

  const quesData = questions.data.map((question) => {
    const name = question.name;
    const total = question.total;
    const singleQues = { name, total };
    return singleQues;
  });
  console.log(quesData);
  return (
    <div className="container child">
      <BarChart width={500} height={400} data={quesData}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="total"></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;
