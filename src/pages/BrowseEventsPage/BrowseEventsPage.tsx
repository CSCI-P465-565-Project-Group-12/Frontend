import { useSelector } from "react-redux";
import EventGridCard from "../../componets/UI/EventGridCard/EventGridCard";
import FilterBox from "../../componets/UI/FilterBox/FilterBox";
import Navbar from "../../componets/UI/Navbar/Navbar";
import "./BrowseEventsPage.css";
import { useEffect, useState } from "react";
let events = [
  {
    title: "IU Hoosiers vs Northwestern Wildcats",
    date: "2024-02-18",
    venue: "Assembly Hall",
    time: "3:00 PM",
    category: "Sports",
    image:
      "https://cdn.vox-cdn.com/thumbor/5d-NuwLaj1O8-Cqn203pYpbvO3M=/0x0:4096x2730/1200x800/filters:focal(1721x1038:2375x1692)/cdn.vox-cdn.com/uploads/chorus_image/image/71981748/FpDehdlWcAAnJLi.0.jpg",
  },
  {
    title: "McCormick Tribune Ice Rink",
    date: "2024-01-11",
    venue: "Millennium Park",
    category: "Sports",
    image:
      "https://cdn.choosechicago.com/uploads/2023/11/mpicerink-900x400.jpg",
  },
  {
    title: "Tampa Bay Chocolate Festival",
    date: "2024-02-19",
    venue: "Gulfview Square Mall",
    time: "10:00 AM - 5:00 PM",
    category: "Food",
    image:
      "https://thatssotampa.com/wp-content/uploads/2023/12/ChocFestNew.jpg",
  },
  {
    title: "United States Grand Prix",
    date: "2024-10-25",
    venue: "Circuit of the Americas",
    time: "2:00 PM",
    category: "Sports",
    image:
      "https://media.formula1.com/content/dam/fom-website/sutton/2022/USA/Sunday/1435987206.jpg.img.1536.high.jpg",
  },
  {
    title: "Squash court reservation",
    date: "2024-02-23",
    venue: "IU Recreational Sports Center",
    category: "Sports",
    time: "6:00 PM",
    image: "https://indianapublicmedia.org/images/news-images/srsc.jpg",
  },
  {
    title: "Focus room reservation",
    date: "2024-02-20",
    venue: "Herman B Wells Library",
    category: "Education",
    time: "9:00 AM - 11:00 AM",
    image:
      "https://www.wbiw.com/wordpress/wp-content/uploads/2020/10/herman-library.jpg",
  },
];
const BrowseEventsPage = () => {
  const currentFilters = useSelector((state: any) => state.filter);
  const [filteredEvents, setFilteredEvents] = useState(events);
  useEffect(() => {
    if (
      currentFilters.search === "" &&
      currentFilters.categoryFilters.length === 0 &&
      currentFilters.locationFilters.length === 0 &&
      currentFilters.dateFilters.length === 0
    ) {
      setFilteredEvents(events);
    }
    if (currentFilters.search !== "") {
      setFilteredEvents(
        events.filter((event: any) =>
          event.title
            .toLowerCase()
            .includes(currentFilters.search.toLowerCase())
        )
      );
    }
    if (currentFilters.categoryFilters.length > 0) {
      setFilteredEvents(
        events.filter((event: any) =>
          currentFilters.categoryFilters.includes(event.category)
        )
      );
    }
    if (currentFilters.locationFilters.length > 0) {
      setFilteredEvents(
        events.filter((event: any) =>
          currentFilters.locationFilters.includes(event.venue)
        )
      );
    }
    if (currentFilters.dateFilters.length > 0) {
      setFilteredEvents(
        events.filter((event: any) =>
          currentFilters.dateFilters.includes(event.date)
        )
      );
    }
  }, [currentFilters]);
  console.log(filteredEvents);

  return (
    <>
      <Navbar />
      <div className="browse-events-page-container">
        <div className="filter-box-container">
          <FilterBox />
        </div>
        <div className="all-events-container">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event: any) => {
              return (
                <EventGridCard
                  title={event.title}
                  date={event.date}
                  venue={event.venue}
                  image={event.image}
                  key={event.title}
                />
              );
            })
          ) : (
            <h2>No events found</h2>
          )}
        </div>
      </div>
    </>
  );
};
export default BrowseEventsPage;
