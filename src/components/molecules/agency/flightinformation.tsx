import TypographyAtom from "../../atoms/typography";
import Grid from "../../atoms/grid";
import { Reservation } from "../../../interfaces/hotelinterface";
import CardAtom from "../../atoms/card";
import DividerAtom from "../../atoms/divider";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <CardAtom variant="outlined" sx={{ height: "100%", p: 1, backgroundColor: "info.500", boxShadow: 3,borderRadius:"25px" }}>
      <TypographyAtom variant="h6" gutterBottom fontWeight={"bold"} fontSize={"20px"} textAlign={"center"} color={"primary.main"}>
        {title}
      </TypographyAtom>
      <DividerAtom />
      {children}
    </CardAtom>
  );
};

interface FlightInformationProps {
  reservation: Reservation;
}

const FlightInformation: React.FC<FlightInformationProps> = ({ reservation }) => {
  return (
    <Grid container spacing={2}>
      {reservation.dossierFlights.map((flightDossier, index) => (
        <Grid sx={{p: 2}} container spacing={2}>
      <Grid item lg={4} sm={12}>
        <InfoCard title="Flight Information">
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Flight Number: {flightDossier.flight?.flightNumber}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Flight Date: {flightDossier.flight?.flightDate}
          </TypographyAtom>
        </InfoCard>
      </Grid>
      <Grid item lg={4} sm={12}>
      {flightDossier.flight?.flightAirplanes?.map((airplaneItem, index) => (
        <InfoCard title="Airline Information">
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airline Name: {airplaneItem.airplane.name}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airline Company: {airplaneItem.airplane.company}
          </TypographyAtom>
        </InfoCard>))}
      </Grid>
      <Grid item lg={4} sm={12}>
      {flightDossier.flight?.flightAirports?.map((airportItem, index) => (
        <InfoCard title="Airport Information">
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airport Name: {airportItem.airport.name}
          </TypographyAtom>
          <TypographyAtom variant="subtitle1" color={"info.100"}>
            Airport Code: {airportItem.airport.code}
          </TypographyAtom>
        </InfoCard>))}
      </Grid> 
      </Grid>  ))}
    </Grid>
  );
};

export default FlightInformation;
