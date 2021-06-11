import React from "react";
import { Link } from "react-router-dom";
import "./EachHotel.css";
const EachHotelType = ({ service }) => {
  // console.log(service);
  return (
    <div className="col-10 mx-auto col-md-3 mt-4 mb-2">
      <div
        className="card bg-danger"
        style={{
          width: "100%",
          height: "20rem",
          boxShadow: "2px 2px 20px rgba(0,0,0,0.5)",
        }}
      >
        <img
          className="card-img-top"
          style={{ maxHeight: "80%", minHeight: "75%" }}
          src={service.image}
          alt="service.name"
        />
        <div className="card-body">
          <Link to={`/list/${service.trip}`}>
            <h4 className="card-text heading__card ">{service.name}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EachHotelType;
