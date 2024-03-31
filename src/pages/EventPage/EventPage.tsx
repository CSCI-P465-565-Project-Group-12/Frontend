import { useNavigate, useParams } from "react-router";
import Calendar from "../../componets/UI/Calendar/Calendar";
import Navbar from "../../componets/UI/Navbar/Navbar";

import "./EventPage.css";
import { events } from "../../dummyData";
import { useSelector } from "react-redux";
const EventPage: React.FC = () => {
  const { eventId } = useParams();
  const identifiedEvent = events.find((event) => event.title === eventId);
  if (!identifiedEvent) {
    return <h2>Event not found</h2>;
  }
  const date = new Date(identifiedEvent.date);
  const day = date.getDate().toString();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear().toString();
  const navigate = useNavigate();
  const googleUserName = useSelector((state: any) => state.googleUser.name);
  console.log(identifiedEvent);

  const redirectToCheckout = (e: any) => {
    e.preventDefault();
    identifiedEvent.details.price === "Free"
      ? alert("Booking Successful")
      : navigate("/checkout", {
          state: {
            checkout: {
              amount: identifiedEvent.details.price,
              eventName: identifiedEvent.title,
              eventLocation: identifiedEvent.details.location,
              eventTime: `${day} ${month} ${year}`,
              eventDate: `${day} ${month} ${year}`,
              userName: googleUserName,
            },
          },
        });
  };
  return (
    <>
      <Navbar />
      <div className="event-page-container">
        <div className="cover-image">
          <img src={identifiedEvent.image} alt="event" />
        </div>
        <div className="event-details">
          <div className="event-details-container-1">
            <h1>{identifiedEvent.title}</h1>
            <div className="event-category">
              <p>{identifiedEvent.category}</p>
            </div>
            <p>{identifiedEvent.details.description}</p>
            <div className="event-notes">
              <h3>Venue Notes</h3>
              <ul>
                {identifiedEvent.details.venueNotes?.split(".").map((note) => {
                  return note ? <li>{note}</li> : null;
                })}
              </ul>
            </div>
          </div>
          <div className="event-details-container-2">
            <div className="event-organizer">
              <h3>Event Organizer</h3>
              <p>{identifiedEvent.details.eventOrganizer}</p>
            </div>
            <Calendar day={[day]} month={month} year={year} />
            <div className="event-info">
              <div className="event-location">
                <h3>Location</h3>
                <p>{identifiedEvent.details.location}</p>
              </div>
              <div className="event-cost">
                <h3>Cost</h3>
                <p>
                  {identifiedEvent.details.price === "Free"
                    ? "Free"
                    : `${identifiedEvent.details.price}`}
                </p>
              </div>
            </div>
            <button className="book-event-btn" onClick={redirectToCheckout}>
              Book Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventPage;
