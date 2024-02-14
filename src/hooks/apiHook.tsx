const useApi = () => {
  const baseApi = "https://api.example.com";
  const register = async (data: any) => {
    const response = await fetch(`${baseApi}/register`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  };
  return { register };
};

export default useApi;
