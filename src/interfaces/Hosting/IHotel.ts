import { IAdress } from "./IAdress"

export interface IHotel {
  address:IAdress
  email:string
  id:number
  image:string
  name:string
  phoneNumber:string
  rating:number
  ville:string
  website:string;
  price?:string;
  numberOfRooms:number;
  }

