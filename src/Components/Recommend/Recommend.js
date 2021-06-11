import React, { useContext, useEffect } from "react";
import HotelContext from "../../Context/HotelContext/HotelContext";
import EachRecommend from "./EachRecommend";

const Recommend = () => {
  const hotelContext = useContext(HotelContext);
  const { randomList, fetchRecommended } = hotelContext;
  useEffect(() => {
    fetchRecommended(Math.floor(Math.random() * 4) + 1);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      {randomList &&
        randomList.length > 0 &&
        randomList.map((element) => (
          <EachRecommend key={element._id} recommendation={element} />
        ))}
    </div>
  );
};

export default Recommend;
