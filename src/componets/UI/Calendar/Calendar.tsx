import "./Calendar.css";

interface ICalendarProps {
  day: string;
  month: string;
  year: string;
}
const Calendar: React.FC<ICalendarProps> = (props) => {
  return (
    <div className="calendar">
      <div className="month">
        <a href="#" className="nav">
          <i className="bi bi-chevron-left"></i>
        </a>
        <div>
          {props.month}
          <span className="year">{props.year}</span>
        </div>
        <a href="#" className="nav">
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div className="days">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
      <div className="dates">
        {Array.from({ length: 31 }, (_, i) => (
          <button key={i + 1} className={i + 1 === +props.day ? "today" : ""}>
            <time>{i + 1}</time>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
