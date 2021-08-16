import React, { useEffect, useContext } from "react";
import HotelContext from "../../Context/HotelContext/HotelContext";
import { Link } from "react-router-dom";
import Loading from "../../Layout/Loading/Loading";
const DetailInfo = (props) => {
  // console.log(props.match.params.id);
  const hotelContext = useContext(HotelContext);
  const { particularHotel, fetchSingleDetail } = hotelContext;

  useEffect(() => {
    fetchSingleDetail(props.match.params.id);
    // eslint-disable-next-line
  }, []);
  console.log(particularHotel);
  const data =
    particularHotel && particularHotel.length > 0 && particularHotel[0];
  return particularHotel && particularHotel.length > 0 ? (
    <div className="mt-3">
      <img
        src={data.thumb}
        alt={data.name}
        className="mt-2 mx-auto"
        style={{
          width: "90vw",
          display: "block",
          borderRadius: "10px",
          height: "65vh",
        }}
      />
      <hr />
      <h4>
        <span className="badge badge-dark">
          <i className="fas fa-rupee-sign"></i> {data.cost}
        </span>{" "}
        per day
      </h4>
      <div className="mt-3 p-3">
        <div>
          <h2 className="display-4">{data.name}</h2>
          {data.type.map((trip) => (
            <button
              className="btn btn-outline-primary mt-2 mx-3"
              key={trip.name}
            >
              {trip.name}
            </button>
          ))}
        </div>
        <hr />
        <hr />
        <h5 className="text-info">
          <i className="fa fa-map-marker" aria-hidden="true"></i> Location{" "}
          <span className="text-danger">{data.locality}</span>
        </h5>

        <p className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          nesciunt quod voluptatem hic temporibus, neque excepturi eos atque
          nemo necessitatibus at. Quae accusamus asperiores architecto, porro
          quaerat repudiandae dolorum, aperiam nobis dolore nihil sequi sapiente
          explicabo, rem fugiat voluptate fugit.
        </p>
        <h5>Sarvesh: +91 8554089906</h5>
        <p className="text-dark">
          <i className="fa fa-location-arrow" aria-hidden="true"></i>{" "}
          <span className="text-danger">{data.address}</span>
        </p>
      </div>
      <div className="mb-5">
        <Link className="btn btn-outline-dark" to="/home">
          Return Home
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default DetailInfo;
