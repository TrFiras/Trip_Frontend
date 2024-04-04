// useHotels.js
import { useQuery } from "react-query";
import { getAllAirports } from "../services/AirportService";

export const useAirports = () => {
  const { isLoading, error, data } = useQuery("airports", getAllAirports);

  const getAirports = () => {
    return {
      loading: isLoading,
      error,
      data: data ? data.data.airports : [],
    };
  };

  return { getAirports };
};
