import TypographyAtom from "../atoms/typography";
import { useTranslations } from "../../hooks/useTranslation";
import ButtonAtom from "../atoms/button";
import BoxAtom from "../atoms/box";
import AppBarAtom from "../atoms/appbar";
import ToolbarAtom from "../atoms/toolbar";
import DividerAtom from "../atoms/divider";
import Logo from "../../assets/travel_logo_app.png";
import LanguageSelector from "../molecules/LanguageSelector";
import { DarkModeToggle } from "../molecules/darkModeToggle";
import useScroll from "../../hooks/useScroll";
import useHome from "../../hooks/useHome";

const Header: React.FC = () => {
  const { translations } = useTranslations();
  const navigateToReservationSection = useScroll();
  const navigateToHome = useHome();


  return (
    <AppBarAtom
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "info.800", py: "5px" }}
    >
      <ToolbarAtom>
        <img            alt="Logo Header" src={Logo} height="80px" />
        <DividerAtom
          sx={{ backgroundColor: "info.main", height: "28px", mx: 2 }}
          orientation="vertical"
        />
        <BoxAtom sx={{ display: { xs: "none", lg: "block" } }}>
          <TypographyAtom variant="h6" color="info.100">
            {translations.titleapp}
          </TypographyAtom>
        </BoxAtom>
        <BoxAtom style={{ flexGrow: 1 }} />
        <DarkModeToggle />
        <LanguageSelector />
        <ButtonAtom
          variant="contained"
          color="primary"
          sx={{ display: { xs: "none", sm: "block" } }}
          onClick={navigateToReservationSection}
        >
          {translations.findreserveration}
        </ButtonAtom>
        <ButtonAtom
          variant="contained"
          color="primary"
          sx={{ marginLeft: "10px" , display: { xs: "none", sm: "block" } }}
          onClick={navigateToHome}
        >
          {translations.findClientHome}
        </ButtonAtom>
      </ToolbarAtom>
    </AppBarAtom>
  );
};

export default Header;
