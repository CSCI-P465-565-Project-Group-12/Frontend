import axios from "axios";

const useApi = () => {
  const baseApi = import.meta.env.VITE_BASE_API as string;
  const register = async (data: any) => {
    await axios
      .post(baseApi + "signup", data)
      .then((res) => {
        const duoAuthUrl = res.data.url;
        window.location.href = duoAuthUrl;
      })
      .catch((err) => {
        console.log(err.response.data);
        const duoAuthUrl = err.response.data.url;
        window.location.href = duoAuthUrl;
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

  const validateUserToken = async (token: string) => {
    const response = await axios
      .get(baseApi + "validate-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        return err.response.data;
      });
  };
  return { register, addressSearch, validateUserToken };
};

export default useApi;
