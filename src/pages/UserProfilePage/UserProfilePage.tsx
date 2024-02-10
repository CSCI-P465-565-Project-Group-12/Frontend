import { useLocation } from "react-router";
import "./UserProfilePage.css";
import Navbar from "../../componets/UI/Navbar/Navbar";
interface IUser {
  name: string;
  email: string;
}
const UserProfilePage: React.FC = () => {
  const location = useLocation();
  //   const user = location.state as IUser;
  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="side-bar-menu">
          <h1 className="side-bar-logo">BashBoss</h1>
          <div className="side-bar-profile-info">
            <div className="profile-pic">
              <img src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg" />
            </div>
            <div className="profile-info">
              <h2>John Doe</h2>
              <p>jdoe@iu.edu</p>
            </div>
          </div>
          <div className="side-bar-links">
            <div className="link">
              <i className="bi bi-house-door-fill"></i>
              <a href="/">Dashboard</a>
            </div>
            <div className="link">
              <i className="bi bi-calendar-event-fill"></i>
              <a href="/">Events</a>
            </div>
            <div className="link">
              <i className="bi bi-megaphone-fill"></i>
              <a href="/">Announcements</a>
            </div>
            <div className="link">
              <i className="bi bi-info-circle-fill"></i>
              <a href="/">Help</a>
            </div>
          </div>
          <div className="side-bar-footer">
            <p>&copy; 2024 BashBoss. All rights reserved.</p>
          </div>
        </div>
        <div className="user-profile"></div>
      </div>
    </>
  );
};
export default UserProfilePage;
