import axios from "axios";

const useApi = () => {
  const baseApi = import.meta.env.VITE_BASE_API as string;
  const register = async (data: any) => {
    const response = await axios.post(baseApi + "signup", data);
    return response;
  };
  return { register };
};

export default useApi;
