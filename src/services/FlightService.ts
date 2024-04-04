import { gql } from "graphql-request";
import { apiGraphqlInstance } from "../api/axios";

export const getAllFlights = async () => {
  
    const response = await apiGraphqlInstance.post("", {
      query: GET_FLIGHTS,
    });
    return response.data;
  
};

export const GET_FLIGHTS = gql`
  query {
    flights 
  {
      
      id, flightNumber, flightDate,__typename
      flightAirplanes {
        airplane {
          name,capacity,company
        }
      },flightAirports {
         airport {
            name,code, address {
                  city,country,region,postalCode
                },
        }
      }
     
    }
  }
`;
