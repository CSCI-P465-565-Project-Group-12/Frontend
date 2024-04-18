import { Link } from "react-router-dom";

import "./BookedEvents.css";
// import { IEvent } from "../../IEvent";
import { useEffect, useState } from "react";
import { IVenue } from "../../IVenue";
import useApi from "../../hooks/apiHook";
import { useDispatch } from "react-redux";
import { IBookedEvent, setBookedEvent } from "../../store/booked-event-store";
import LoadingModal from "../UI/Modal/LoadingModal";
import { loadingActions } from "../../store/loading-store";

const BookedEvents = () => {
  const [venues, setVenues] = useState<IVenue[]>([]);
  const [bookedEvents, setBookedEvents] = useState<any[]>([]);
  const { getAllVenues, retrieveAllReservations } = useApi();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingActions.setLoading({ isLoading: true, message: "" }));
    getAllVenues().then(async (res) => {
      const response = await res;
      setVenues(response);
    });
    console.log(venues);
  }, []);
  useEffect(() => {
    retrieveAllReservations().then((res) => {
      dispatch(loadingActions.setLoading({ isLoading: false, message: "" }));
      setBookedEvents(res);
      let data: IBookedEvent[] = [];

      res.forEach((event: any) => {
        let identifiedVenue = venues.find(
          (venue: any) => venue.id === event.venueId
        );
        console.log(identifiedVenue);

        data.push({
          eventId: event.id,
          eventName: event.name,
          eventDate: event.startTime?.toString().split("T")[0],
          eventTime: event.startTime?.toString().split("T")[1],
          coverImg: event.coverImg,
          eventLocation: `${identifiedVenue?.street}, ${identifiedVenue?.city}, ${identifiedVenue?.state}, ${identifiedVenue?.zipcode}`,
          venueName: identifiedVenue?.name,
        });
      });
      dispatch(setBookedEvent(data));
    });
  }, [venues.length > 0]);
  console.log(bookedEvents);

  return (
    <>
      <div className="booked-events-container">
        <h2>Your Booked Events</h2>
        <div className="booked-events">
          {bookedEvents.map((event, index) => (
            <div key={index} className="booked-event">
              <div className="event-image">
                <img src={event.coverImg} alt={event.name} />
              </div>
              <div className="event-key-details">
                <h3>{event.name}</h3>
                <p>
                  {
                    venues.find((venue: any) => venue.id === event.venueId)
                      ?.name
                  }
                </p>
                <p>{event.startTime.split("T")[0]}</p>
              </div>
              <div className="manage-event">
                <button>
                  <Link
                    to={{
                      pathname: "/manage-event",
                    }}
                    state={{ bookedEventId: event.id, userId: event.userId }}
                  >
                    Manage Event
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LoadingModal message="Loading your booked events." />
    </>
  );
};

export default BookedEvents;
