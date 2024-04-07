import React, { useState } from "react";
import BoxAtom from "../../atoms/box";
import TextFieldAtom from "../../atoms/textfield";
import Table from "../../molecules/table";
import TableRow from "../../atoms/tableRow";
import TableCell from "../../atoms/tableCell";
import DialogAtom from "../../atoms/dialog";
import TypographyAtom from "../../atoms/typography";
import ButtonAtom from "../../atoms/button";
import { useClientByFullName } from "../../../hooks/useclient";
import { useNotification } from "../../../hooks/useNotification";
import { Accordion, AccordionDetails, AccordionSummary, TableContainer } from "@mui/material";
import { ExpandIcon } from "../../atoms/icons/expendIcon";
import HotelInformation from "../../molecules/agency/hotelInformation";
import FlightInformation from "../../molecules/agency/flightinformation";
//import FlightInformation from "../../molecules/agency/flightinformation";

const BookingSection: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [open, setOpen] = useState(false);

  const { getClientByFullName } = useClientByFullName(
    firstName,
    lastName
  );
  const { data } = getClientByFullName();
  const { displayNotification } = useNotification();
  const handleSearchClick = async () => {
    try {
       getClientByFullName(); // Call the API

      // Open the dialog only if data is available
      if (data) {
        setOpen(true);
      }
      else {
        displayNotification({
          type: "error",
          message: "",
          title: "Error",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };


  
const headers = ["Dossier Number", "Created Date", "First Name", "Last Name"];

  return (
    <>
      <BoxAtom
        sx={{
          margin: "0 auto",
          backgroundColor: "info.main",
          borderRadius: "25px",
          width: { xs: "80%", lg: "50%", sm: "70%" },
        }}
        p={"20px"}
        id="reservationSection"
      >
        <TypographyAtom
          variant="h6"
          gutterBottom
          textAlign={"center"}
          color={"info.800"}
        >
          Find my reservation
        </TypographyAtom>
        <BoxAtom
          display={"flex"}
          justifyContent={"center"}
          gap={"15px"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            margin: "0 auto",
            backgroundColor: "info.main",
            borderRadius: "25px",
          }}
          p={"20px"}
        >
          <TextFieldAtom
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            color="secondary"
            sx={{ input: { color: "info.800" } }}
            InputLabelProps={{
              sx: { color: "info.800" },
            }}
          />
          <TextFieldAtom
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            color="secondary"
            sx={{ input: { color: "info.800" } }}
            InputLabelProps={{
              sx: { color: "info.800" },
            }}
          />
          <ButtonAtom
            variant="contained"
            color="primary"
            onClick={handleSearchClick}
          >
            Search
          </ButtonAtom>
        </BoxAtom>
      </BoxAtom>
      <BoxAtom height={"20px"} />
      <DialogAtom open={open} title={""} onClose={handleClose}>
        {open ? (
                <TableContainer sx={{ backgroundColor: "info.800" }}>
        <Table headers={headers}>
          {data.map((item) => (
            <React.Fragment key={item.dossierNumber}>
               <TableRow>
                <TableCell>
                  <TypographyAtom color="info.100">
                    {item.dossierNumber}
                  </TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">
                  {item.createdAt}
                  </TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">
                  {firstName}
                  </TypographyAtom>
                </TableCell>
                <TableCell>
                  <TypographyAtom color="info.100">
                  {lastName}
                  </TypographyAtom>
                </TableCell>
              </TableRow>
              {item.bookingRoom && (

              <TableRow>
                <TableCell
                  colSpan={4}
                  sx={{
                    padding: "0px",
                  }}
                >
                  <Accordion
                    sx={{
                      width: "100%",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "info.800",
                        fontSize: "18px",
                        fontWeight: "bold",
                        width: "860px",
                      }}
                    >
                      Show Hosting Information
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "#189BCC",
                        color: "info.100",
                        width: "830px",
                      }}
                    >
                      <HotelInformation reservation={item} />
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
              </TableRow>
                            )}

{item.dossierFlights && (

<TableRow>
  <TableCell
    colSpan={4}
    sx={{
      padding: "0px",
      paddingBottom:'10px'
    }}
  >
    <Accordion
      sx={{
        width: "100%",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: "primary.main",
          color: "info.800",
          fontSize: "18px",
          fontWeight: "bold",
          width: "860px",
        }}
      >
        Show Flight Information
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#189BCC",
          color: "info.100",
          width: "830px",
        }}
      >
        <FlightInformation reservation={item} />
      </AccordionDetails>
    </Accordion>
  </TableCell>
</TableRow>
              )}
           

            </React.Fragment>
          ))}
        </Table>
      </TableContainer>
              
        ) : null}
      </DialogAtom>
    </>
  );
};

export default BookingSection;
