import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RegisterSuccessPage from "./pages/RegisterSuccessPage/RegisterSuccessPage";
import AuthCallbackHandlerPage from "./pages/AuthCallbackHandlerPage/AuthCallbackHandlerPage";
import BrowseEventsPage from "./pages/BrowseEventsPage/BrowseEventsPage";
import EventPage from "./pages/EventPage/EventPage";
import PasswordResetPage from "./pages/PasswordResetPage/PasswordResetPage";
import EventsNearMePage from "./pages/EventsNearMePage/EventsNearMePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ManageEventPage from "./pages/ManageEventPage/ManageEventPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage/PaymentSuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/browse-events" element={<BrowseEventsPage />} />
      <Route path="/events-near-me" element={<EventsNearMePage />} />
      <Route path="/event/:eventId" element={<EventPage />} />
      <Route path="/sign-up" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />
      <Route path="/post-auth-callback" element={<AuthCallbackHandlerPage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="*" element={<ErrorPage errorType="404" />} />
      <Route path="/register-success" element={<RegisterSuccessPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/manage-event" element={<ManageEventPage />} />
      <Route path="/payment-success" element={<PaymentSuccessPage />} />
    </Routes>
  );
}

export default App;
