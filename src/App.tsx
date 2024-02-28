import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RegisterSuccessPage from "./pages/RegisterSuccessPage/RegisterSuccessPage";
import AuthCallbackHandlerPage from "./pages/AuthCallbackHandlerPage/AuthCallbackHandlerPage";
import BrowseEventsPage from "./pages/BrowseEventsPage/BrowseEventsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/browse-events" element={<BrowseEventsPage />} />
      <Route path="/sign-up" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/post-auth-callback" element={<AuthCallbackHandlerPage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="*" element={<ErrorPage errorType="404" />} />
      <Route path="/register-success" element={<RegisterSuccessPage />} />
    </Routes>
  );
}

export default App;
