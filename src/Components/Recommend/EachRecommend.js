import React from "react";
import "./Recommendation.css";
import { Link } from "react-router-dom";
const EachRecommend = ({ recommendation }) => {
  const { name, city_name, thumb, cost, _id } = recommendation;
  // console.log(recommendation);
  return (
    <div className="col-6 mx-auto col-md-3">
      <div className="card text-white bg-dark mb-3">
        <img
          className="card-img-top"
          src={thumb}
          style={{ height: "10rem" }}
          alt={name}
        />
        <div className="card-header">
          <Link to={`/details/${_id}`}>
            <span className="badge badge-light text-dark">{name}</span>
          </Link>
        </div>
        <div className="card-body city__cost">
          <p>{city_name}</p>
          <p>
            <i className="fas fa-rupee-sign"></i> {cost} /day
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachRecommend;
