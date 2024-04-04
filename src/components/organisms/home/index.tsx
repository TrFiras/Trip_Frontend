
import DividerAtom from "../../atoms/divider";
import { AboutSection } from "../../molecules/aboutSection";
import BookingSection from "./bookingSection";

const Home: React.FC = () => {
  
  return (
    <>
      <DividerAtom
        sx={{ backgroundColor: "info.main", height: "2px", my: 2 }}
      />
      <AboutSection />
      <DividerAtom
        sx={{ backgroundColor: "info.main", height: "2px", my: 2 }}
      />
     <BookingSection /> 
      <DividerAtom
        sx={{ backgroundColor: "info.main", height: "2px", my: 2 }}
      />
    </>
  );
};

export default Home;
