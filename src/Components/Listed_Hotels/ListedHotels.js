import React, { useContext, useEffect } from "react";
import HotelContext from "../../Context/HotelContext/HotelContext";
import Loading from "../../Layout/Loading/Loading";
import EachListed from "./EachListed";
import FormList from "./FormList";
import Recommended from "../Recommend/Recommend";

const ListedHotels = (props) => {
  // console.log(props.match.params.id);
  const hotelContext = useContext(HotelContext);

  const { fetchHotelLists, listedHotels } = hotelContext;
  // console.log(fetchHotelLists);
  // console.log(listedHotels);
  useEffect(() => {
    fetchHotelLists(props.match.params.id);

    // eslint-disable-next-line
  }, []);

  return listedHotels ? (
    <div className="mt-4">
      <div className="row">
        <div className="col-10 col-md-10 mx-auto">
          <h5 className="text-center">
            We Recommend You to Visit Below Hotels{" "}
            <i className="fas fa-hotel"></i>
          </h5>
          <Recommended />
        </div>
      </div>
      <FormList historyId={props.match.params.id} />
      <h5>
        <span className="badge badge-warning text-dark">
          Search Results {listedHotels.length}
        </span>
      </h5>

      <div className="row">
        {listedHotels.length > 0 ? (
          listedHotels.map((eachList) => (
            <EachListed key={eachList._id} listedProp={eachList} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ListedHotels;
