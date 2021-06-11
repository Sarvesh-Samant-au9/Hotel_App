/* eslint-disable import/no-anonymous-default-export */
import {
  OUR_SERVICES,
  HOTEL_LIST,
  RANDOM_HOTELS,
  SINGLE_HOTEL_DETAIL,
  ALL_CITIES,
  ALL_HOTELS_CITY,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case OUR_SERVICES:
      return {
        ...state,
        services: payload,
      };

    case HOTEL_LIST:
      return {
        ...state,
        listedHotels: payload,
      };

    case RANDOM_HOTELS:
      return {
        ...state,
        randomList: payload.splice(0, 4),
      };

    case SINGLE_HOTEL_DETAIL:
      return {
        ...state,
        particularHotel: payload,
      };
    case ALL_CITIES:
      return {
        ...state,
        allCities: payload,
      };

    case ALL_HOTELS_CITY:
      return {
        ...state,
        allHotelsCity:payload
      };
    default:
      return state;
  }
};