import axios from "axios";

const useApi = () => {
  const baseApi = import.meta.env.VITE_BASE_API as string;
  const register = async (data: any) => {
    const response = await axios.post(baseApi + "signup", data);
    console.log(response.data.url);

    return response;
  };
  const addressSearch = async (address: string) => {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${
        import.meta.env.VITE_MAPBOX_API_KEY
      }`
    );

    return response.data.features;
  };
  return { register, addressSearch };
};

export default useApi;
