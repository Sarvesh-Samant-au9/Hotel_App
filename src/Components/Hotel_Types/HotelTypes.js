import React from "react";
import EachHotelType from "./EachHotelType";

const HotelTypes = ({ services }) => {
  console.log(services);
  return (
    <div>
      <div className="row">
        {services.length > 0 &&
          services.map((service) => (
            <EachHotelType key={service._id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default HotelTypes;
