// import BestSellingEventsSection from "../../componets/BestSellingEventsSection/BestSellingEventsSection";
import HeroSection from "../../componets/HeroSection/HeroSection";
import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";
import UpcomingEventsSection from "../../componets/UpcomingEventsSection/UpcomingEventsSection";
import { useEffect, useState } from "react";
import { loadingActions } from "../../store/loading-store";
import { useDispatch } from "react-redux";
import { IVenue } from "../../IVenue";
import useApi from "../../hooks/apiHook";
import LoadingModal from "../../componets/UI/Modal/LoadingModal";
import BestSellingEventsSection from "../../componets/BestSellingEventsSection/BestSellingEventsSection";
const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState<IVenue[]>([]);
  const { getAllEvents, getAllVenues } = useApi();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      loadingActions.setLoading({
        isLoading: true,
        message: "",
      })
    );
    getAllEvents().then((res) => {
      setEvents(res);
    });
    getAllVenues().then((res) => {
      setVenues(res);
    });
  }, []);
  console.log("events", events, "venues", venues);
  useEffect(() => {
    if (events.length > 0 && venues.length > 0)
      dispatch(
        loadingActions.setLoading({
          isLoading: false,
          message: "",
        })
      );
  }, [events, venues]);

  const requiredColsEvents = events.map((event: any) => {
    return {
      title: event.name,
      date: event.startTime,
      venue: venues.find((venue: any) => venue.id === event.venueId)?.name,
    };
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <UpcomingEventsSection events={requiredColsEvents} />
      <BestSellingEventsSection events={events} venues={venues} />
      {/* create a div to show "We are working on it with a text and bootstrap icon" */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "2rem",
        }}
      >
        <i className="bi bi-gear-fill" />
        <p>
          We are working on a technical issue with this section, Thank you for
          your patience.
        </p>
      </div> */}
      <Footer />
      <LoadingModal message="Loading Events.." />
    </>
  );
};
export default HomePage;
