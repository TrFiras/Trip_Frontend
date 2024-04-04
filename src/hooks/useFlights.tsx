// useHotels.js
import { useQuery } from "react-query";
import { getAllFlights } from "../services/FlightService";

export const useFlights = () => {
  const { isLoading, error, data } = useQuery("flights", getAllFlights);

  const getFlights = () => {
    return {
      loading: isLoading,
      error,
      data: data ? data.data.flights : [],
    };
  };

  return { getFlights };
};
