import React from "react";
import { Grid, Card, Typography, Button, Avatar } from "@mui/material";
import RatingAtom from "../../atoms/rating";
import BoxAtom from "../../atoms/box";
import { useTranslations } from "../../../hooks/useTranslation";
import { Hotel } from "../../../interfaces/hotelinterface";
import { useDispatch } from "react-redux";
import { setStep } from "../../../redux/features/reservationSlice";
import { useHotels } from "../../../hooks/useHotels";
import IconButtonAtom from "../../atoms/iconButton";
import { EmailIcon } from "../../atoms/icons/EmailIcon";
import { PostalCodeIcon } from "../../atoms/icons/PostalCodeIcon";
import { RegionIcon } from "../../atoms/icons/RegionIcon";
import { WebSiteIcon } from "../../atoms/icons/WebSiteIcon";
import { RoomIcon } from "../../atoms/RoomIcon";
import { PhoneIcon } from "../../atoms/icons/PhoneIcon";



const HotelList: React.FC = () => {
  const { getHotels } = useHotels();
  const { data,  } = getHotels();
  const { translations } = useTranslations();
  const dispatch = useDispatch();
  return (
    <>
      {data.map((hotel: Hotel) => (
        <Grid item xs={12} key={hotel.id}>
          <Card
            sx={{
              padding: "10px",
              margin: "20px",
              borderRadius: "15px",
              backgroundColor: "info.800",
            }}
          >
            <Grid container spacing={2}>
              <Grid item sm={12} lg={3} width={"100%"}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{
                    height: "225px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item sm={12} lg={6}>
                <Typography
                  variant="h5"
                  component="div"
                  color={"info.main"}
                  fontWeight={"bold"}
                >
                  {hotel.name}
                </Typography>
                <BoxAtom height={"15px"} />
                <Typography variant="body2" color={"info.100"}>
                {hotel.address.city}  , {hotel.address.country}
                </Typography>
                <RatingAtom
                  name={`rating-${hotel.id}`}
                  value={hotel.rating}
                  precision={0.5}
                />
                <BoxAtom height={"15px"} />

                <Typography variant="body2" color={"info.100"}>
                <IconButtonAtom >
                      <RegionIcon /> 
                      <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> Region - {hotel.address.region}</span>
                </IconButtonAtom>
                <IconButtonAtom >
                      <PostalCodeIcon /> 
                      <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> PC - {hotel.address.postalCode}</span>
                </IconButtonAtom>
                <IconButtonAtom >
                      <EmailIcon /> 
                      <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> {hotel.email}</span>
                </IconButtonAtom>
                <IconButtonAtom >
                      <WebSiteIcon /> 
                      <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> {hotel.website}</span>
                </IconButtonAtom>
                </Typography>
              </Grid>
              <Grid
                item
                sm={12}
                lg={3}
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={"column"}
                width={"100%"}
              >
                <BoxAtom
                  display={"flex"}
                  gap={"8px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  px={2}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={"info.100"}
                  >
                    {hotel.rating<3?"Mauvais":(hotel.rating>=3&&hotel.rating<=4?"Moyen":(hotel.rating==5?"Excellent":"Good"))}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"14px"}
                    color={"info.100"}
                  >
                    {translations.reviewers}
                  </Typography>
                  <Avatar sx={{ backgroundColor: "info.main" }}>{hotel.rating}</Avatar>
                </BoxAtom>
                <BoxAtom>
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"18px"}
                    color={"info.100"}
                  >
                  <IconButtonAtom >
                      <RoomIcon /> 
                      <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> {hotel.numberOfRooms} rooms</span>
                </IconButtonAtom>
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    fontSize={"18px"}
                    color={"info.main"}
                  >
                    <IconButtonAtom >
                      <PhoneIcon /> 
                      <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> {hotel.phoneNumber}</span>
                </IconButtonAtom>
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      paddingX: "15px",
                      paddingY: "10px",
                      borderRadius: "15px",
                      width: "100%",
                    }}
                    onClick={()=>dispatch(setStep(1))}
                  >
                    {translations.checkavailable}
                  </Button>
                </BoxAtom>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default HotelList;
