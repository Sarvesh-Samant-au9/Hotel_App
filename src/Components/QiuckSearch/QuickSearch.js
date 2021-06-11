import HotelContext from "../../Context/HotelContext/HotelContext";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

const QuickSearch = (props) => {
  console.log(props);
  const history = useHistory();
  const hotelContext = useContext(HotelContext);
  const {
    allCities,
    fetchAllCities,
    allHotelsCity,
    fetchAllHotelsOnCityChange,
  } = hotelContext;

  useEffect(() => {
    fetchAllCities();
    // eslint-disable-next-line
  }, []);

  const onHandleChange = (id) => {
    if (id.target.value === null) {
      return;
    }
    // console.log(id.target.value);
    fetchAllHotelsOnCityChange(id.target.value);
  };

  const onChangeSelectHotel = (e) => {
    if (e.target.value === null) return;
    history.push(`/details/${e.target.value}`);
  };

  // console.log(allHotelsCity);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <select onChange={(id) => onHandleChange(id)}>
        <option disabled>Search City </option>
        <option value={null}>Search City</option>
        {allCities &&
          allCities.length > 0 &&
          allCities.map((city) => (
            <option value={city.city} key={city.city}>
              {city.city_name}
            </option>
          ))}
      </select>
      <select onChange={(e) => onChangeSelectHotel(e)} className="mx-3">
        <option disabled> Hotel List</option>
        <option value={null}> Hotel List</option>
        {allHotelsCity &&
          allHotelsCity.length > 0 &&
          allHotelsCity.map((hotel) => (
            <option value={hotel._id} key={hotel._id}>
              {hotel.name}
            </option>
          ))}
      </select>
    </form>
  );
};

export default QuickSearch;
