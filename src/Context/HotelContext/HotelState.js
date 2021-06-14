import { useReducer } from "react";
import axios from "axios";
import HotelReducer from "./HotelReducer";
import HotelContext from "./HotelContext";
import {
  ALL_CITIES,
  ALL_HOTELS_CITY,
  HOTEL_LIST,
  OUR_SERVICES,
  RANDOM_HOTELS,
  SINGLE_HOTEL_DETAIL,
  FILTER_ROOMS,
} from "../types";

const HotelState = (props) => {
  const initialState = {
    services: null,
    listedHotels: null,
    randomList: null,
    particularHotel: null,
    allCities: null,
    allHotelsCity: null,
  };
  const [state, dispatch] = useReducer(HotelReducer, initialState);

  const fetchTypes = async () => {
    try {
      const { data } = await axios.get(
        "https://developerfunnel.herokuapp.com/booking"
      );
      dispatch({
        type: OUR_SERVICES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHotelLists = async (id) => {
    try {
      const { data } = await axios.get(
        `https://developerfunnel.herokuapp.com/hotellist/${id}`
      );
      dispatch({
        type: HOTEL_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecommended = async (id) => {
    try {
      const { data } = await axios.get(
        `https://developerfunnel.herokuapp.com/hotellist/${id}`
      );
      dispatch({
        type: RANDOM_HOTELS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleDetail = async (id) => {
    try {
      const { data } =
        await axios.get(` https://developerfunnel.herokuapp.com/hotelsdetails/${id}
      `);
      dispatch({
        type: SINGLE_HOTEL_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllCities = async () => {
    try {
      const { data } = await axios.get(
        `https://developerfunnel.herokuapp.com/location`
      );

      dispatch({
        type: ALL_CITIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllHotelsOnCityChange = async (id) => {
    try {
      const { data } = await axios.get(
        `https://developerfunnel.herokuapp.com/hotels?city=${id}`
      );
      dispatch({
        type: ALL_HOTELS_CITY,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filteredDataRoomType = async (id, inputVal) => {
    try {
      const { data } = await axios.get(
        `https://developerfunnel.herokuapp.com/hotellist/${id}?roomtype=${inputVal}`
      );
      dispatch({
        type: FILTER_ROOMS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        services: state.services,
        listedHotels: state.listedHotels,
        randomList: state.randomList,
        particularHotel: state.particularHotel,
        allCities: state.allCities,
        allHotelsCity: state.allHotelsCity,

        fetchTypes,
        fetchHotelLists,
        fetchRecommended,
        fetchSingleDetail,
        fetchAllCities,
        fetchAllHotelsOnCityChange,
        filteredDataRoomType,
      }}
    >
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelState;
