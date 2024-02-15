import axios from "axios";

const useApi = () => {
  const baseApi = `https://user-and-profile-service.vercel.app/`;
  const register = async (data: any) => {
    const response = await axios.post(baseApi + "signup", data);
    return response;
  };
  return { register };
};

export default useApi;
