import { Paths } from "../routes/paths";
import { useCustomNavigate } from "../routes/paths";


const useScroll = () => {
  
  const Mynavigate = useCustomNavigate();

  const addReservation = async () => {
  Mynavigate(Paths.clienttemplate + Paths.client.book);
  }
  return addReservation;
};

export default useScroll;
