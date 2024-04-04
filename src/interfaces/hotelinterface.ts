import { IAdress } from "./Hosting/IAdress"

export interface Hotel {
  email:string
  id:number
  image:string
  name:string
  phoneNumber:string
  rating:number
  address:IAdress
  website:string;
  price?:string;
  numberOfRooms:number;
  }




  export interface Reservation {
    id: number;
    guestName: string;
    date: string;
    time: string;
    table: string;
    phone: string;
    email: string;
    notes: string;
    rooms: Room[];
    flight: Flight | null;
    hotelName: string;
    hotelContact: HotelContact;
  }

  export interface HotelContact {
    phone: string;
    email: string;
  }
  export interface Room {
    type: string;
    number: number;
  }
  
  interface Flight {
    airport: string;
    airportAddress: string;
    airline: string;
    airlineContact: string;
    startFlightDate: string;
    endFlightDate: string;
  }





