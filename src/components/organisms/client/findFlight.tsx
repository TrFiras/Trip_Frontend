import React, { useState } from "react";
import BoxAtom from "../../atoms/box";
import TypographyAtom from "../../atoms/typography";
import GridAtom from "../../atoms/grid";
import ButtonAtom from "../../atoms/button";
import { setStep } from "../../../redux/features/reservationSlice";
import { useDispatch } from "react-redux";
import MapStreet from "../maps/map";
import { useTranslations } from "../../../hooks/useTranslation";
import { useFlights } from "../../../hooks/useFlights";
import { IFlightBook } from "../../../interfaces/Trip/IFlightBook";
import { ICoordinate } from "../../../interfaces/Trip/ICoordinate";


const FindFlight: React.FC = () => {
  const { translations } = useTranslations();

  const dispatch = useDispatch();
  const { getFlights } = useFlights();
  const { data,  } = getFlights();

 
  const [source, setSource] = useState<ICoordinate | null>(null);
  const [destination, setDestination] = useState<ICoordinate | null>(null);
  const [selectedFlight, setselectedFlight] = useState<IFlightBook | null>(null);

  const handleMarkerClick = (position:ICoordinate,isSource:boolean) => {
    if (isSource) {
      setSource(position);
    } else  {
      setDestination(position);
    }
    console.log(source);
  };
  const imageClick = (flight: IFlightBook) => {
    setselectedFlight(flight);
    console.log(flight);
  } 
  return (
    <BoxAtom sx={{ padding: "20px", backgroundColor: "info.500" }}>
      <GridAtom container spacing={2} alignItems="center">
        <GridAtom
          item
          xs={12}
          lg={6}
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
        >
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {translations.selectsource} :
          </TypographyAtom>
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {source?.name} - {source?.code}
          </TypographyAtom>
          <MapStreet onMarkerClick={handleMarkerClick} isSource={true} />
        </GridAtom>
        <GridAtom
          item
          xs={12}
          lg={6}
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
        >
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {translations.selectdestination} :
          </TypographyAtom>
          <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
            {destination?.name} - {destination?.code}
          </TypographyAtom>
          <MapStreet onMarkerClick={handleMarkerClick} isSource={false}/>
        </GridAtom>
      </GridAtom>
      <BoxAtom mt={4}>
        <TypographyAtom variant="h6" gutterBottom color={"info.100"}>
          Your selected flight is : {selectedFlight?.flightNumber}
        </TypographyAtom>
        <GridAtom container spacing={2}>
          {data.map((flight : IFlightBook) => (
            <GridAtom item key={flight.flightNumber} xs={12} lg={4} sm={6}>
              <BoxAtom
                p={2}
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundColor: "info.800", borderRadius: "25px" }}
              >
                <img
                  src={
                    "https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/a/airplanes-brussels-airport-getty-637243664-mod.jpg?rev=bdc22e3766084401848f8b1ce124cc03"
                  }
                  onClick={() => imageClick(flight)}
                  alt={flight.flightNumber}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <TypographyAtom
                  variant="h6"
                  color={"info.100"}
                  textAlign={"center"}
                >
                  Flight Number: {flight.flightNumber} -  Flight Date: {flight.flightDate}
                </TypographyAtom>
                
                {flight.flightAirports.map((flightAirport) => (
                <TypographyAtom
                  variant="body1"
                  color={"info.100"}
                  textAlign={"center"}
                >
                  {flightAirport?.airport?.name}: {flightAirport?.airport?.address?.city}-{flightAirport?.airport?.address?.country}
                </TypographyAtom>
                ))};
                {flight.flightAirplanes.map((flightAirplane) => (
                <TypographyAtom
                  variant="body1"
                  color={"info.100"}
                  textAlign={"center"}
                >
                  {flightAirplane?.airplane?.capacity} chair available in plane of type {flightAirplane?.airplane?.name}-{flightAirplane?.airplane?.company}
                </TypographyAtom>
                ))};

              </BoxAtom>
            </GridAtom>
          ))}
        </GridAtom>
      </BoxAtom>
      <BoxAtom
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        gap={"8px"}
      >
        {" "}
        <ButtonAtom
          variant="contained"
          color="primary"
          sx={{
            paddingX: "15px",
            paddingY: "10px",
            borderRadius: "15px",
            mt: 1,
          }}
        >
          {translations.continuewithoutflight}
        </ButtonAtom>
        <ButtonAtom
          variant="outlined"
          color="primary"
          sx={{
            paddingX: "15px",
            paddingY: "10px",
            borderRadius: "15px",
            mt: 1,
          }}
          onClick={() => dispatch(setStep(1))}
        >
          {translations.back}
        </ButtonAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default FindFlight;
