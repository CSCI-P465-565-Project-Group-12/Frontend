import { useEffect, useState } from "react";
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
  const [wish, setWish] = useState<string>("");
  const wishes: string[] = ["Good Morning", "Good Afternoon", "Good Evening"];
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      setWish(wishes[0]);
    } else if (hours < 18) {
      setWish(wishes[1]);
    } else {
      setWish(wishes[2]);
    }
  }, []);
  return (
    <>
      <div className="user-dashboard-container">
        <div className="wish">
          <h1>{wish}</h1>
        </div>
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
                  key={index}
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
