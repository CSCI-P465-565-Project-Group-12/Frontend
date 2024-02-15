import axios from "axios";

const useApi = () => {
  const baseApi = `http://localhost:8080/`;
  const register = async (data: any) => {
    const response = await axios.post(baseApi + "signup", data);
    return response;
  };
  return { register };
};

export default useApi;
