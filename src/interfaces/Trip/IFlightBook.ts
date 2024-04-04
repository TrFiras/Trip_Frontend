import { IAirPlane } from "./IAirPlane";
import { IAirport } from "./IAirport";

  export interface IFlightBook {
    id: string;
    flightDate: string;
    flightNumber: string;
    flightAirplanes: Array<IAirPlane>;
    flightAirports: Array<IAirport>;

  }





