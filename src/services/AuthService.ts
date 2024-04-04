import { apiRestInstance } from "../api/axios";
import { ClientActivate, ClientLogin, ClientRegister } from "../interfaces/clientintrface";


const register = async (user: ClientRegister) => {
  return await apiRestInstance.post("/api/User", user);
};
const login = async (user: ClientLogin) => {
  console.log(user)
  return await apiRestInstance.post("/api/User/login", user,);

};
const activate = async (user: ClientActivate) => {

  return await apiRestInstance.post("/api/client/ActivateAccount", user,);

};
const AuthService = {
  register,
  login,
  activate
};
export default AuthService;