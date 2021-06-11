import React, { useEffect, useContext } from "react";
import HotelTypes from "../../Components/Hotel_Types/HotelTypes";

import HotelContext from "../../Context/HotelContext/HotelContext";
import Loading from "../../Layout/Loading/Loading";
import QuickSearch from "../../Components/QiuckSearch/QuickSearch";

const Home = () => {
  const hotelContext = useContext(HotelContext);
  const { fetchTypes, services } = hotelContext;
  useEffect(() => {
    fetchTypes();
    // console.log(services);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h4 className="text-center display-4 text-info">
        Hello, <span className="text-danger">Plan A Trip</span>
      </h4>
      <div className="row">
        <div className="col-6 mx-auto">
          <p className="text-info text-center">
            We Provide You the Best Possible Touring Options and all at
            Affordable Price.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6 mt-2 mx-auto text-center">
          <div>
            <h3 className="text-dark display-4 s">Choose Your Type of Trip</h3>
            <small className="text-muted">
              Exciting Times Awaiting For You{" "}
            </small>
            <QuickSearch />
          </div>
        </div>
        <div className="mt-2 col-12 mx-auto">
          {services !== null ? <HotelTypes services={services} /> : <Loading />}
        </div>
      </div>
    </>
  );
};

export default Home;
