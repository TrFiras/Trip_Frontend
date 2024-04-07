import { Paths } from "../routes/paths";
import { useCustomNavigate } from "../routes/paths";


const useHome = () => {
  
  const Mynavigate = useCustomNavigate();

  const findReservation = async () => {
  Mynavigate(Paths.clienttemplate + Paths.client.home);
  }
  return findReservation;
};

export default useHome;
