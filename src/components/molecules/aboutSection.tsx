import TypographyAtom from "../atoms/typography";
import { useTranslations } from "../../hooks/useTranslation";
import ButtonAtom from "../atoms/button";
import BoxAtom from "../atoms/box";
import GridAtom from "../atoms/grid";
import AboutImage from "../../assets/trip_about.png";
import {  useState } from "react";
import Carousel from 'react-material-ui-carousel'
import { Grid, TableContainer } from "@mui/material";
import DialogAtom from "../atoms/dialog";
import { useHotels } from "../../hooks/useHotels";
import CardMediaAtom from "../atoms/cardMedia";
import { Hotel } from "../../interfaces/hotelinterface";
import RatingAtom from "../atoms/rating";
import IconButtonAtom from "../atoms/iconButton";
import { RoomIcon } from "../atoms/icons/RoomIcon";


export const AboutSection: React.FC = () => {

  const { getHotels } = useHotels();
  const { data,  } = getHotels();

  const { translations } = useTranslations();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchClick = async () => {
    setOpen(true);
  }

  return (
    <div>
    <DialogAtom open={open} title={""} onClose={handleClose}>
    {open ? (
            <TableContainer sx={{ backgroundColor: "info.800" }}>
 <Carousel>
            {
                data.map((hotel: Hotel) => (
                <Grid sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <CardMediaAtom
                  component="img"
                  image={`${hotel.image}`}
                  sx={{ height: "500px"  }}
                />
                <TypographyAtom variant="h3" color="info.100">
                    <span style={{fontFamily: "Brush Script MT, Brush Script Std, cursive"}}> {hotel.name}</span>
                    <IconButtonAtom >
                      <RoomIcon /> <span style={{fontSize: "17px", fontStyle:"bold", fontFamily: "Bradley Hand, cursive"}}> {hotel.numberOfRooms} available room</span>
                    </IconButtonAtom>
                    </TypographyAtom>
                <RatingAtom
                name={`rating-${hotel.id}`}
                value={hotel.rating}
                precision={0.5}
              />
              <TypographyAtom
                    variant="h6"
                    color="info.100"
                    sx={{ marginTop: 1 }}
                  >
                    {hotel.address.city}  , {hotel.address.country}
                  </TypographyAtom>
              </Grid>  
                 ))
            }
        </Carousel>
              </TableContainer>
    ) : null}
    </DialogAtom>
    <GridAtom
      container
      p={"10px"}
      mt={"10px"}
      sx={{ backgroundColor: "info.main" }}
    >
      <GridAtom
        item
        lg={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TypographyAtom variant="h3" color="info.800" textAlign="center">
          {translations.welcome}
        </TypographyAtom>
        <BoxAtom height={"15px"} />

        <BoxAtom
          p="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyAtom variant="h6" color="info.800">
            {translations.welcomeinformation}
          </TypographyAtom>
          <BoxAtom height={"15px"} />

          <ButtonAtom
            variant="contained"
            color="primary"
            sx={{ margin: "0 auto" }}
            onClick={handleSearchClick}
          >
            {translations.explorehotels}
          </ButtonAtom>
        </BoxAtom>
        <BoxAtom height={"15px"} />
      </GridAtom>

      <GridAtom item lg={4} sx={{ margin: "0 auto" }}>
        <img
          src={AboutImage}
          width={"100%"}
          style={{ borderRadius: "25px", maxHeight: "400px" }}
          alt="About Us"
        />
      </GridAtom>
    </GridAtom>
    </div>
  );
};
