import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RegisterSuccessPage from "./pages/RegisterSuccessPage/RegisterSuccessPage";

function App() {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const userString = searchParams.get("user");
  // const user = userString ? JSON.parse(decodeURIComponent(userString)) : null;
  // console.log(user);
  // console.log(searchParams);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="*" element={<ErrorPage errorType="404" />} />
      <Route path="/register-success" element={<RegisterSuccessPage />} />
    </Routes>
  );
}

export default App;
