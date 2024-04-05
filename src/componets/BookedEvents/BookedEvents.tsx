import { Link } from "react-router-dom";
import "./BookedEvents.css";
interface IBookedEvent {
  title: string;
  date: string;
  venue: string;
  image: string;
}
interface IBookedEvents {
  bookedEvents: IBookedEvent[];
}

const BookedEvents: React.FC<IBookedEvents> = (props) => {
  return (
    <div className="booked-events-container">
      <h2>Your Booked Events</h2>
      <div className="booked-events">
        {props.bookedEvents.map((event, index) => (
          <div key={index} className="booked-event">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.venue}</p>
              <p>{event.date}</p>
            </div>
            <div className="manage-event">
              <button>
                <Link
                  to={{
                    pathname: "/manage-event",
                  }}
                  state={{ bookedEvent: event }}
                >
                  Manage Event
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedEvents;
