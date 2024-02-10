import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<UserProfilePage />} />
    </Routes>
  );
}

export default App;
