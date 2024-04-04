import { gql } from "graphql-request";
import { apiGraphqlInstance } from "../api/axios";

export const GET_CLIENT_RESERVATION_BY_FULL_NAME = gql`
  query dossiersByClient($firstName: String!, $lastName: String!) {
    dossiersByClient(firstName: $firstName, lastName: $lastName) {
      dossierNumber,createdAt
      ,dossierFlights {
        flight {flightNumber,flightDate,__typename
          flightAirplanes {
            airplane {
              name,capacity,company
            }
          },flightAirports {
             airport {
              name,code
            }
          }
        }
      } ,client {
        passportNumber,isActive
        ,address {
          city,country,region,postalCode
        }
      },bookingRoom {
        startDate,endDate, totalAmount, rooms {
          type,price, hotel {
            name,phoneNumber,email, image
          }
        }
      }
  
    }
  }
`;

export const GET_BASIC_CLIENT_BY_FULL_NAME = gql`
  query GetBasicClientByFullName($firstname: String!, $lastname: String!) {
    getClientByFullName(firstname: $firstname, lastname: $lastname) {
      id
      trip {
        id
        clientId
        hotel {
          id
          name
          address
          ville
          website
          rating
          image
          phoneNumber
          email
        }
      }
    }
  }
`;

export const getAllClientByFullName = async (firstName:string, lastName:string) => {
  
    const response = await apiGraphqlInstance.post("", {
      query: GET_CLIENT_RESERVATION_BY_FULL_NAME,
      variables: { firstName, lastName },
    });
    return response.data;
  
};


