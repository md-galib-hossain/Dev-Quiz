import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ quiz }) => {
  const { id, name, logo, total } = quiz;

  return (
    <div className="col-md-6 col-lg-4 col-sm-12 gy-5">
      <div className="card card-modify">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">{name}</p>
          <p className="card-text">Total : {total}</p>
          <Link to={`/quiz/${id}`}>
            <button className="w-full btn btn-primary">Lets Go</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
