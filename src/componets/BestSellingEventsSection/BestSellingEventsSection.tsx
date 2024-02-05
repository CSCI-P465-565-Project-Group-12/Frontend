import EventGridCard from "../UI/EventGridCard/EventGridCard";
import "./BestSellingEventsSection.css";
const BestSellingEventsSection: React.FC = () => {
  const events = [
    {
      title: "Pokemon Event",
      date: "12th Jan 2024",
      venue: "Ash's House, Pallet Town",
      noOfTicketsSold: 1000,
      image:
        "https://leekduck.com/assets/img/events/pokemon-go-fest-2022-finale.jpg",
    },
    {
      title: "Valentine's Day Event",
      date: "14th Feb 2024",
      venue: "Rockfeller Center, New York",
      noOfTicketsSold: 2000,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F664763189%2F1938353675633%2F1%2Foriginal.20231229-220153?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=cc491a182f7f818e122c5e79a479fac0",
    },
    {
      title: "IU Hoosiers vs Purdue Boilermakers",
      date: "16th March 2024",
      venue: "Assembly Hall, Bloomington",
      noOfTicketsSold: 3000,
      image:
        "https://www.indystar.com/gcdn/presto/2023/01/30/PIND/9af3166f-eeda-4fef-90b1-bb22db88bc0a-Centers.jpg?crop=814,458,x0,y0",
    },
    {
      title: "Pacers vs Lakers",
      date: "18th March 2024",
      venue: "Bankers Life Fieldhouse, Indianapolis",
      noOfTicketsSold: 4000,
      image:
        "https://statics.foxsports.com/www.foxsports.com/content/uploads/2023/12/12.08.23_NBA-In-Season-Tournament_Making-cases-for-the-Lakers-and-Pacers-to-win-NBA-Cup_16x9.jpg",
    },
    {
      title: "Indianapolis 500",
      date: "25th May 2024",
      venue: "Indianapolis Motor Speedway",
      noOfTicketsSold: 5000,
      image:
        "https://1075thefan.com/wp-content/uploads/sites/100/2023/04/16825240024515.png?strip=all&quality=80&w=1024&crop=0,0,100,576px",
    },
    {
      title: "Dutch Grand Prix",
      date: "1st Sept 2024",
      venue: "Zandvoort, Netherlands",
      noOfTicketsSold: 6000,
      image:
        "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245021/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Netherlands.jpg",
    },
  ];
  return (
    <section className="best-selling-events-section">
      <h1 style={{ textAlign: "center" }}>Best Selling Events</h1>
      <div className="best-selling-events-container">
        <div className="best-selling-events-row">
          {events
            .sort((a, b) => b.noOfTicketsSold - a.noOfTicketsSold)
            .splice(0, 4)
            .map((event) => {
              return (
                <EventGridCard
                  title={event.title}
                  date={event.date}
                  venue={event.venue}
                  image={event.image}
                  noOdTicketsSold={event.noOfTicketsSold}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default BestSellingEventsSection;
