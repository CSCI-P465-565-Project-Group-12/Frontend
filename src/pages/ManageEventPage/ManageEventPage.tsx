import { useLocation, useNavigate } from "react-router";
import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";
import "./ManageEventPage.css";
import { venues } from "../../dummyData";
import Chat from "../../componets/Chat/Chat";
import { useSelector } from "react-redux";
interface IBookedEvent {
  name: string;
  date: string;
  venue: string;
  image: string;
  details?: any;
}

const ManageEventPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state: any) => state.normalUser);
  const googleUser = useSelector((state: any) => state.googleUser);

  const bookedEvent: IBookedEvent = location.state.bookedEvent;
  const identifiedVenueOwner: any = venues.find(
    (venue) => venue.activities[0].name === bookedEvent.name
  )?.name;
  return (
    <>
      <Navbar />
      <div className="manageEvents-page-container">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Manage Your Event
        </h1>
        <div className="manageEvents-container">
          <div className="bookedEvent-detail">
            <h2>{bookedEvent.name}</h2>
            <img src={bookedEvent.image} alt={bookedEvent.name} />
            <p>
              By <span id="venue-owner-name">{identifiedVenueOwner}</span>
            </p>
            <p>
              Venue: <b>{bookedEvent.venue}</b>
            </p>
            <p>
              Date: <b>{bookedEvent.date}</b>
            </p>
            <p>
              Location: <b>{bookedEvent.details.location}</b>
            </p>
            <button
              onClick={() => {
                navigate(`/event/${bookedEvent.name}`, {
                  state: { event: bookedEvent },
                });
              }}
            >
              View more details
            </button>
          </div>
          <div className="manageOptions-container">
            <h2>Manage Options</h2>
            <div className="cancel-event-option">
              <i className="bi bi-trash" />
              <h2>Cancel Event</h2>
            </div>
            <div className="share-event-option">
              <i className="bi bi-share" />
              <h2>Share Event</h2>
            </div>
            <div className="resend-confirmation-option">
              <i className="bi bi-envelope" />
              <h2>Resend Confirmation</h2>
            </div>
          </div>
        </div>
        <div className="chat-section">
          <h2
            style={{
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            Chat with Venue Owner
          </h2>
          {googleUser && user === null ? (
            <h2>Please Login to chat </h2>
          ) : googleUser !== null ? (
            <Chat sender={googleUser.email} event={bookedEvent.name} />
          ) : (
            <Chat sender={user.email} event={bookedEvent.name} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageEventPage;
