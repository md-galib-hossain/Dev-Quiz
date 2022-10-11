import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ quiz }) => {
  const { id, name, logo, total } = quiz;

  return (
    <div className="col-md-6 col-lg-4 col-sm-12 gy-5 ">
      <div className="card card-modify">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Total : {total}</p>
          <Link to={`/quiz/${id}`}>
            <button className="btn btn-primary">Lets Go</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
