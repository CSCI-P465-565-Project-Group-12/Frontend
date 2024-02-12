import EventGridCard from "../UI/EventGridCard/EventGridCard";
import UserUpcomingEventCard from "../UI/UserUpcomingEventCard/UserUpcomingEventCard";
import "./UserDashboard.css";

interface IEvent {
  title: string;
  date: string;
  venue: string;
  image: string;
  time?: string;
}
interface IEvents {
  events: IEvent[];
}
const UserDashboard: React.FC<IEvents> = (props) => {
  return (
    <>
      <div className="user-dashboard-container">
        <div className="user-upcoming-event">
          <h2>Upcoming Event</h2>
          {props.events.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          })[0] === undefined ? (
            <h3>No upcoming events</h3>
          ) : (
            <UserUpcomingEventCard
              title={props.events[0].title}
              date={props.events[0].date}
              venue={props.events[0].venue}
              image={props.events[0].image}
              time={props.events[0].time}
            />
          )}
        </div>
        <h2
          style={{
            marginTop: "6rem",
          }}
        >
          Your Bookings
        </h2>
        <div className="user-bookings">
          {props.events
            .filter((event) => {
              return new Date(event.date).getTime() > new Date().getTime();
            })
            .map((event, index) => {
              return (
                <EventGridCard
                  title={event.title}
                  date={event.date}
                  venue={event.venue}
                  image={event.image}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default UserDashboard;
