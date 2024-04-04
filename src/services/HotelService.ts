import { gql } from "graphql-request";
import { apiGraphqlInstance } from "../api/axios";

export const getAllHotels = async () => {
  
    const response = await apiGraphqlInstance.post("", {
      query: GET_HOTELS,
    });
    return response.data;
  
};

export const GET_HOTELS = gql`
  query {
    hotels {
      address {
      city,country,region,postalCode
    },
      email
      image
      id
      name
      phoneNumber
      numberOfRooms
      rating
      ville
      website
    }
  }
`;
