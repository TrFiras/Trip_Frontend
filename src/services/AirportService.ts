import { gql } from "graphql-request";
import { apiGraphqlInstance } from "../api/axios";

export const getAllAirports = async () => {
  
    const response = await apiGraphqlInstance.post("", {
      query: GET_AIRPORT,
    });
    return response.data;
  
};

export const GET_AIRPORT = gql`
  query {
    airports 
    {
              name,code, address {
                    city,country,region,postalCode, latitude,longitude
                  },
          }
  }
`;
