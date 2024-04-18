import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { normalUserActions } from "../store/normal-user-store";
import { loginActions } from "../store/login-store";
import { loadingActions } from "../store/loading-store";

const useApi = () => {
  const baseApi = import.meta.env.VITE_BASE_API as string;
  const vabApi = import.meta.env.VITE_BASE_VAB_API as string;
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
        // console.log(err);
        // alert("Invalid username or password.");
        const duoAuthUrl = err.response.data.url;
        window.location.href = duoAuthUrl;
      });
  };
  const getUser = async (userId: string) => {
    const response = await axios.get(baseApi + "user/" + userId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  };
  const fetchProfile = async () => {
    const response = await axios.get(baseApi + "profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        username: localStorage.getItem("username"),
      },
    });
    console.log(response.data);
    return response.data;
  };
  const createProfile = async (data: any) => {
    console.log(data);

    await axios
      .post(baseApi + "createprofile", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Profile created successfully.");
        return res.data;
      })
      .catch((err) => {
        alert("An error occurred while creating the profile.");
        console.log(err.response);
        return err.response.data;
      });
  };
  const updateProfile = async (data: any) => {
    const response = await axios.post(
      baseApi + "updateprofile",
      { updateParams: data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
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

        dispatch(loginActions.login());
        // console.log(useSelector((state: any) => state.login));

        dispatch(normalUserActions.setUser(res.data.jwtUserObj));
        dispatch(loadingActions.setLoading({ isLoading: false, message: "" }));
        navigate("/user", { state: { loginType: "normal" } });
      })
      .catch((err) => {
        return err.response.data;
      });
  };

  const getAllVenues = async () => {
    const response = await axios.get(vabApi + "venues", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log(response.data);

    return response.data;
  };

  // events api
  const getAllEvents = async () => {
    const response = await axios.get(vabApi + "activities", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
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

  // reservations api
  const createReservation = async (data: any) => {
    const response = await axios.post(vabApi + "reservation", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    localStorage.setItem("reservationId", response.data.id);
    return response.status;
  };

  const changeReservationStatus = async (status: string) => {
    const response = await axios.post(
      vabApi +
        `changeReservationStatus/${localStorage.getItem("reservationId")}`,
      {
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      alert("Activity status updated successfully.");
    }
    localStorage.removeItem("activityId");
    return response.data;
  };
  const changePaymentStatus = async () => {
    const response = await axios.post(
      vabApi + `changePaymentStatus/${localStorage.getItem("reservationId")}`,
      {
        paymentStatus: "Completed",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      alert("Payment status updated successfully.");
    }
    localStorage.removeItem("reservationId");
    return response.data;
  };

  const retrieveAllReservations = async () => {
    const response = await axios.get(vabApi + "reservations/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  };
  return {
    register,
    getUser,
    login,
    fetchProfile,
    createProfile,
    updateProfile,
    addressSearch,
    validateUserTokenForNormalUser,
    getAllVenues,
    getAllEvents,
    sendOtp,
    createReservation,
    changeReservationStatus,
    changePaymentStatus,
    retrieveAllReservations,
  };
};

export default useApi;
