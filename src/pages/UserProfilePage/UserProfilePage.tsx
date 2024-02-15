import { useNavigate } from "react-router";
import "./UserProfilePage.css";
import Navbar from "../../componets/UI/Navbar/Navbar";
import UserDashboard from "../../componets/UserDashboard/UserDashboard";
import { useEffect, useState } from "react";

interface IEvents {
  title: string;
  date: string;
  venue: string;
  image: string;
  time?: string;
}
interface IUser {
  name: string;
  email: string;
  events: IEvents[];
}

const dummyUser: IUser = {
  name: "John Doe",
  email: "jdoe@iu.edu",
  events: [
    {
      title: "IU Hoosiers vs Northwestern Wildcats",
      date: "2024-02-18",
      venue: "Assembly Hall",
      time: "3:00 PM",
      image:
        "https://cdn.vox-cdn.com/thumbor/5d-NuwLaj1O8-Cqn203pYpbvO3M=/0x0:4096x2730/1200x800/filters:focal(1721x1038:2375x1692)/cdn.vox-cdn.com/uploads/chorus_image/image/71981748/FpDehdlWcAAnJLi.0.jpg",
    },
    {
      title: "McCormick Tribune Ice Rink",
      date: "2024-01-11",
      venue: "Millennium Park",
      image:
        "https://cdn.choosechicago.com/uploads/2023/11/mpicerink-900x400.jpg",
    },
    {
      title: "Tampa Bay Chocolate Festival",
      date: "2024-02-19",
      venue: "Gulfview Square Mall",
      time: "10:00 AM - 5:00 PM",
      image:
        "https://thatssotampa.com/wp-content/uploads/2023/12/ChocFestNew.jpg",
    },
    {
      title: "United States Grand Prix",
      date: "2024-10-25",
      venue: "Circuit of the Americas",
      time: "2:00 PM",
      image:
        "https://media.formula1.com/content/dam/fom-website/sutton/2022/USA/Sunday/1435987206.jpg.img.1536.high.jpg",
    },
    {
      title: "Squash court reservation",
      date: "2024-02-23",
      venue: "IU Recreational Sports Center",
      time: "6:00 PM",
      image: "https://indianapublicmedia.org/images/news-images/srsc.jpg",
    },
    {
      title: "Focus room reservation",
      date: "2024-02-20",
      venue: "Herman B Wells Library",
      time: "9:00 AM - 11:00 AM",
      image:
        "https://www.wbiw.com/wordpress/wp-content/uploads/2020/10/herman-library.jpg",
    },
  ],
};

const UserProfilePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  // const location = useLocation();
  const navigate = useNavigate();
  //   const user = location.state as IUser;

  // const sideBarOptions: string[] = [
  //   "Dashboard",
  //   "Events",
  //   "Announcements",
  //   "Help",
  //   "Logout",
  // ];

  const previewProfilePic = (event: any) => {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function () {
      const img = input.nextElementSibling.querySelector("img");
      img.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
  };
  useEffect(() => {
    const userProfile: any = document.querySelector(".user-profile");
    const navbar: any = document.querySelector(".navbar");
    const navbarHeight = navbar.offsetHeight;
    const sideBar: any = document.querySelector(".side-bar-menu");
    const sideBarWidth = sideBar.offsetWidth;
    userProfile.style.height = `${window.innerHeight - navbarHeight}px`;
    userProfile.style.width = `${window.outerWidth - sideBarWidth}px`;
  }, []);
  useEffect(() => {
    const links: any = document.querySelectorAll(".link");
    links.forEach((link: any) => {
      link.addEventListener("click", () => {
        links.forEach((link: any) => {
          link.classList.remove("selected-link");
        });
        link.classList.add("selected-link");
      });
    });
  }, [selectedOption]);

  useEffect(() => {
    window.onpopstate = () => {
      navigate("/error", { state: { errorType: "404" } });
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="side-bar-menu">
          <h1 className="side-bar-logo">BashBoss</h1>
          <div className="side-bar-profile-info">
            <div className="profile-pic">
              <input
                type="file"
                id="profile-pic-upload"
                accept="image/*"
                onChange={(event) => previewProfilePic(event)}
              />
              <label htmlFor="profile-pic-upload">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                  alt="Profile Picture"
                />
                <span className="tooltip">Upload</span>
              </label>{" "}
            </div>
            <div className="profile-info">
              <h2>{dummyUser.name}</h2>
              <p>{dummyUser.email}</p>
            </div>
          </div>
          <div className="side-bar-links">
            <div
              className="link"
              onClick={() => {
                setSelectedOption("Dashboard");
              }}
            >
              <i className="bi bi-house-door-fill"></i>
              <a href="/">Dashboard</a>
            </div>
            <div
              className="link"
              onClick={() => {
                setSelectedOption("Events");
              }}
            >
              <i className="bi bi-calendar-event-fill"></i>
              <a href="/">Events</a>
            </div>
            <div
              className="link"
              onClick={() => {
                setSelectedOption("Announcements");
              }}
            >
              <i className="bi bi-megaphone-fill"></i>
              <a href="/">Announcements</a>
            </div>
            <div
              className="link"
              onClick={() => {
                setSelectedOption("Help");
              }}
            >
              <i className="bi bi-info-circle-fill"></i>
              <a href="/">Help</a>
            </div>
          </div>
          <div className="side-bar-footer">
            <p>&copy; 2024 BashBoss. All rights reserved.</p>
          </div>
        </div>
        <div className="user-profile">
          {selectedOption === "Dashboard" && (
            <UserDashboard events={dummyUser.events} />
          )}
        </div>
      </div>
    </>
  );
};
export default UserProfilePage;
