import { useLocation } from "react-router";
import LoadingModal from "../../componets/UI/Modal/LoadingModal";
import { useDispatch } from "react-redux";
import { loadingActions } from "../../store/loading-store";
// import { useDispatch } from "react-redux";
// import { loadingActions } from "../../store/loading-store";

const AuthCallbackHandlerPage = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(
    loadingActions.setLoading({ isLoading: true, message: "Authenticating..." })
  );
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  //   const dispatch = useDispatch();

  if (token) {
    localStorage.setItem("token", token);
    // dispatch(loadingActions.setLoading({ isLoading: false, message: "" }));
    // navigate("/");
  }

  return <LoadingModal message="Authenticating..." />;
};
export default AuthCallbackHandlerPage;
