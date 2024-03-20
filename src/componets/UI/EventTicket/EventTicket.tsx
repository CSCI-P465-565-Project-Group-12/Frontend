import "./EventTicket.css";

const EventTicket: React.FC = () => {
  return (
    <>
      <div className="cardWrap">
        <div className="card cardLeft">
          <h1>
            BashBoss <span>Events</span>
          </h1>
          <div className="title">
            <h2>IU Hoosiers vs USC Trojans</h2>
            <span>Event</span>
          </div>
          <div className="name">
            <h2>Vladimir Kudinov</h2>
            <span>name</span>
          </div>
          <div className="seat">
            <h2>Assembly Hall, Bloomington</h2>
          </div>
          <div className="time">
            <h2>12:00</h2>
          </div>
        </div>
        <div className="card cardRight">
          <div className="dollar">
            <i className="bi bi-currency-dollar"></i>
          </div>
          <div className="number">
            <h3>15</h3>
            <span>Amount</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventTicket;
