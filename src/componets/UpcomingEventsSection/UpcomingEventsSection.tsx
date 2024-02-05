import "./UpcomingEventsSection.css";
import upcomingEventImg from "../../assets/upcoming-events.png";
import EventPreviewCard from "../UI/EventPreviewCard/EventPreviewCard";
const UpcomingEventsSection = () => {
  const events = [
    {
      title: "Pokemon Event",
      date: "12th Jan 2024",
      venue: "Ash's House, Pallet Town",
    },
    {
      title: "Valentine's Day Event",
      date: "14th Feb 2024",
      venue: "Rockfeller Center, New York",
    },
    {
      title: "IU Hoosiers vs Purdue Boilermakers",
      date: "16th March 2024",
      venue: "Assembly Hall, Bloomington",
    },
    {
      title: "Pacers vs Lakers",
      date: "18th March 2024",
      venue: "Bankers Life Fieldhouse, Indianapolis",
    },
    {
      title: "Indianapolis 500",
      date: "25th May 2024",
      venue: "Indianapolis Motor Speedway",
    },
    {
      title: "Dutch Grand Prix",
      date: "1st Sept 2024",
      venue: "Zandvoort, Netherlands",
    },
  ];

  return (
    <section className="upcoming-events-section">
      <h1 style={{ textAlign: "center", marginTop: "0" }}>Upcoming Events</h1>
      <div className="upcoming-events-container">
        <div className="upcoming-events">
          {events.map((event) => (
            <EventPreviewCard
              title={event.title}
              date={event.date}
              venue={event.venue}
              key={event.title}
            />
          ))}
        </div>
        <div className="upcoming-events-img-container">
          <img src={upcomingEventImg} alt="upcoming events" />
        </div>
      </div>
    </section>
  );
};
export default UpcomingEventsSection;
