import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/login-store";
import { useNavigate } from "react-router";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleLogoutHandler = () => {
    alert("logged out successfully");
    googleLogout();
    dispatch(loginActions.logout());
    navigate("/");
  };
  return { googleLogoutHandler };
};

export default useAuth;
