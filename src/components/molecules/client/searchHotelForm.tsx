import { useTranslations } from "../../../hooks/useTranslation";
import BoxAtom from "../../atoms/box";
import ButtonAtom from "../../atoms/button";
import DatePickerAtom from "../../atoms/datepicker";
import TextFieldAtom from "../../atoms/textfield";
import TypographyAtom from "../../atoms/typography";
import { CollapseMenuRoom } from "./collapseMenuRoom";


interface FormData {
  startDate: Date | null;
  endDate: Date | null;
  numberOfRooms: string;
  country: string;
}

interface SearchHotelFormProps {
  formData: FormData;
  handleChangeFormData: (
    name: keyof FormData
  ) => (value: string | Date | null) => void;
  handleFilterClick: () => void;
  isStartValid: boolean;
  isEndValid: boolean;
  isCountryValid: boolean;

}



export const SearchHotelForm: React.FC<SearchHotelFormProps> = ({
  formData,
  handleChangeFormData,
  handleFilterClick,
  isStartValid,
  isEndValid,
  isCountryValid,

}) => {
  const {translations}=useTranslations();
  return (
    <BoxAtom
      display={"flex"}
      gap={"40px"}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "95%", sm: "75%" },
        margin: "0 auto",
        alignItems: { xs: "flex-start", sm: "center" },
      }}
    >
      <TypographyAtom  variant="h6" color="info.100">
      <span>Please select your desired room(s) from the list to be able to book it later on: </span> 
      </TypographyAtom>
      
      <CollapseMenuRoom  />
      
    </BoxAtom>
  );
};
