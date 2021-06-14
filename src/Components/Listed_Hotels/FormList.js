import React, { useEffect, useContext, useState } from "react";
import HotelContext from "../../Context/HotelContext/HotelContext";

const FormList = (props) => {
  console.log(props);
  const hotelContext = useContext(HotelContext);
  const [valueSt, setValue] = useState("0");
  const { filteredDataRoomType, fetchHotelLists } = hotelContext;

  const onChange = async (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    if (valueSt === "0") {
      fetchHotelLists(props.historyId);
    } else {
      filteredDataRoomType(props.historyId, valueSt);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="col-10 mx-auto">
      <div className="input-group mb-3">
        <select
          className="custom-select"
          id="inputGroupSelect02"
          onChange={onChange}
        >
          <option disabled value="null">
            Choose...
          </option>
          <option value="0">All</option>
          <option value="1">Deluxe Room</option>
          <option value="2">Premiere Rooms</option>
          <option value="3">Budget Rooms</option>
          <option value="4">Semi Deluxe Rooms</option>
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Hotel Rooms
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormList;
