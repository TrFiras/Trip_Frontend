// HotelInformation.jsx
import React from "react";
import { Grid, CardMedia, Typography } from "@mui/material";
import Table from "../table";
import TableRow from "../../atoms/tableRow";
import TableCell from "../../atoms/tableCell";
import DividerAtom from "../../atoms/divider";
import { Reservation } from "../../../interfaces/hotelinterface";
import CardAtom from "../../atoms/card";
import TypographyAtom from "../../atoms/typography";

interface HotelInformationProps {
  reservation: Reservation;
}

const HotelInformation: React.FC<HotelInformationProps> = ({ reservation }) => {
  return (
    <Grid  sx={{ width: '100%' }}>
      <Grid container  sx={{ width: '100%' }} >
        <Grid item  xs={8}  display={"flex"} gap={"10px"} flexDirection={"column"}>
       
          <Table headers={["Room Type", "Room Price",'Room CheckIn', 'Room CheckOut']} >
            {reservation.bookingRoom.rooms.map((room, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TypographyAtom color="#072e3d">{room.type}</TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="#072e3d">{room.price}</TypographyAtom>
                </TableCell>  
                <TableCell>
                  <TypographyAtom color="#072e3d">{reservation.bookingRoom.startDate}</TypographyAtom>
                </TableCell> 
                <TableCell>
                  <TypographyAtom color="#072e3d">{reservation.bookingRoom.endDate}</TypographyAtom>
                </TableCell>  
                            </TableRow>
            ))}
          </Table>
          <CardAtom
            variant="outlined"
            sx={{ p: 1, backgroundColor: "info.500", boxShadow: 3 }}
          >
            <Typography
              variant="h6"
              gutterBottom
              color={"primary.main"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Hotel Contact
            </Typography>
            <DividerAtom />

            <Typography variant="subtitle1" color={"info.100"}>
              Hotel Name: {reservation.bookingRoom?.rooms[0]?.hotel.name}
            </Typography>
            <Typography variant="subtitle1" color={"info.100"}>
              Hotel Phone: {reservation.bookingRoom?.rooms[0]?.hotel.phoneNumber}
            </Typography>
            <Typography variant="subtitle1" color={"info.100"}>
              Hotel Email: {reservation.bookingRoom?.rooms[0]?.hotel.email}
            </Typography>
          </CardAtom>
        </Grid>
        <Grid item  xs={4}>
          <CardMedia
            component="img"
            height="300"
            image={`${reservation.bookingRoom?.rooms[0]?.hotel.image}`}
            alt="Hotel"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HotelInformation;
