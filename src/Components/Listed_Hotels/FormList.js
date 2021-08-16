import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import HotelContext from "../../Context/HotelContext/HotelContext";

const FormList = (props) => {
  const hotelContext = useContext(HotelContext);
  const [valueSt, setValue] = useState("0");
  const { filteredDataRoomType, fetchHotelLists } = hotelContext;

  const onChange = async (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (valueSt !== "0") {
      filteredDataRoomType(props.historyId, valueSt);
    } else {
      fetchHotelLists(props.historyId);
    }
  }, [valueSt, props.historyId]);
  return (
    <div className="col-10 mx-auto">
      <div className="input-group mb-3">
        <select
          className="custom-select"
          id="inputGroupSelect02"
          onChange={onChange}
        >
          <option disabled value="0">
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

// const handelChange = (e) => {

//      setChange(!change);
//   } else if (inputValue.length === 1) {
//     axios
//       .get(
//         `https://developerfunnel.herokuapp.com/hotellist/${id}?roomtype=${inputValue}`
//       )
//       .then((res) => {
//         dispatch({ type: "SET_HOTEL_LIST", payload: res.data });
//       })
//       .catch((err) => {
//         alert(err);
//       });
//     setChange(!change);
//   } else {
//     const [low, high] = inputValue.split(",");

//     axios
//       .get(
//         `https://developerfunnel.herokuapp.com/hotellist/${id}?hcost=${high}&lcost=${low}`
//       )
//       .then((res) => {
//         dispatch({ type: "SET_HOTEL_LIST", payload: res.data });
//       })
//       .catch((err) => {
//         alert(err);
//       });
//     setChange(!change);
//   }
// };
