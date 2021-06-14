import React from "react";
import { Link } from "react-router-dom";
const EachListed = ({ listedProp }) => {
  const { name, city_name, address, cost, thumb, _id } = listedProp;
  return (
    <div className="col-10 col-md-4 col-lg-3 mb-4">
      <div className="mx-auto card border-primary">
        <img
          className="card-img-top"
          style={{ height: "20vw" }}
          src={thumb}
          alt={name}
        />
        <div className="card-body">
          <h5 className="text-danger">
            {name}, {city_name}
          </h5>
          <p className="card-text text-info">
            <strong className="text-dark">
              <i className="fa fa-map-marker" aria-hidden="true"></i> Address
            </strong>
            {address}
          </p>
          <h5>
            Cost
            <strong>
              <i className="fas fa-rupee-sign"></i> {cost}
            </strong>
          </h5>
          <Link to={`/details/${_id}`} className="btn btn-outline-primary">
            Have a Look !!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EachListed;
