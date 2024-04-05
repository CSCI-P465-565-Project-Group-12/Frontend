import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { normalUserActions } from "../store/normal-user-store";
import { loginActions } from "../store/login-store";
import { loadingActions } from "../store/loading-store";

const useApi = () => {
  const baseApi = import.meta.env.VITE_BASE_API as string;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const register = async (data: any) => {
    await axios
      .post(baseApi + "signup", data)
      .then((res) => {
        dispatch(
          loadingActions.setLoading({
            isLoading: false,
            message: "",
          })
        );
        const duoAuthUrl = res.data.url;
        window.location.href = duoAuthUrl;
      })
      .catch((err) => {
        dispatch(
          loadingActions.setLoading({
            isLoading: false,
            message: "",
          })
        );
        console.log(err.response.data);
        const duoAuthUrl = err.response.data.url;
        window.location.href = duoAuthUrl;
      });
  };
  const login = async (data: any) => {
    console.log(data);

    await axios
      .post(baseApi + "signin", data)
      .then((res) => {
        dispatch(
          loadingActions.setLoading({
            isLoading: false,
            message: "",
          })
        );
        console.log(res.data);
        const duoAuthUrl = res.data.url;
        window.location.href = duoAuthUrl;
      })
      .catch((err) => {
        dispatch(
          loadingActions.setLoading({
            isLoading: false,
            message: "",
          })
        );
        // alert("Something went wrong. Please try again.");
        console.log(err);
        alert("Invalid username or password.");
        return false;
        // const duoAuthUrl = err.response.data.url;
        // window.location.href = duoAuthUrl;
      });
  };
  const addressSearch = async (address: string) => {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${
        import.meta.env.VITE_MAPBOX_API_KEY
      }`
    );

    return response.data.features;
  };

  const validateUserTokenForNormalUser = async (token: string) => {
    await axios
      .get(baseApi + "currentuser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);

        dispatch(normalUserActions.setUser(res.data.jwtUserObj));
        dispatch(loadingActions.setLoading({ isLoading: false, message: "" }));
        dispatch(loginActions.login());
        navigate("/user", { state: { loginType: "normal" } });
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  const sendOtp = async (username: string) => {
    await axios
      .post(baseApi + "sendotp", username, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return {
    register,
    login,
    addressSearch,
    validateUserTokenForNormalUser,
    sendOtp,
  };
};

export default useApi;
