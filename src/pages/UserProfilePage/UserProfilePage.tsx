import { useLocation, useNavigate } from "react-router";
import "./UserProfilePage.css";
import Navbar from "../../componets/UI/Navbar/Navbar";
import UserDashboard from "../../componets/UserDashboard/UserDashboard";
import { useEffect, useState } from "react";
import UserProfile from "../../componets/UserProfile/UserProfile";
import LoadingModal from "../../componets/UI/Modal/LoadingModal";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loadingActions } from "../../store/loading-store";
import { googleUserActions } from "../../store/google-user-store";
import { events } from "../../dummyData";
import BookedEvents from "../../componets/BookedEvents/BookedEvents";

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

interface INormalUser {
  id: string;
  username: string;
  email: string;
}

const dummyUser: IUser = {
  name: "John Doe",
  email: "jdoe@iu.edu",
  events: [events[0], events[2], events[3], events[4]],
};

const UserProfilePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const location = useLocation();
  const dispatch = useDispatch();
  const normalUser: INormalUser = useSelector((state: any) => state.normalUser);
  console.log(normalUser);

  const loginType = location.state.loginType || "";
  let googleUser: any = null;
  if (loginType === "google") {
    const googleCred = location.state.googleCred;
    googleUser = jwtDecode(googleCred.credential);
    dispatch(
      googleUserActions.setGoogleUser({
        name: googleUser.name,
        email: googleUser.email,
      })
    );
    // setGoogleUser(user);
    dispatch(
      loadingActions.setLoading({
        isLoading: false,
        message: "",
      })
    );
  }
  const navigate = useNavigate();

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
  }, [googleUser]);
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
      {loginType === "google" && googleUser === null && (
        <LoadingModal message="" />
      )}

      <div className="profile-page-container">
        <div className="side-bar-menu">
          <h1 className="side-bar-logo">BashBoss</h1>
          <div className="side-bar-profile-info">
            <div className="profile-pic">
              {googleUser === null ? (
                <>
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
                </>
              ) : (
                <img src={googleUser.picture} alt="Profile Picture" />
              )}
            </div>
            <div className="profile-info">
              <h2>{googleUser !== null ? googleUser.name : "Add your name"}</h2>
              <p>{googleUser !== null && googleUser.email}</p>
              <p>{normalUser !== null && normalUser.email}</p>
            </div>
          </div>
          <div className="side-bar-links">
            <div
              className="link"
              onClick={() => {
                setSelectedOption("Profile");
              }}
            >
              <i className="bi bi-person-fill"></i>
              <a href="/">Profile</a>
            </div>
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
          {selectedOption === "Events" && (
            <BookedEvents bookedEvents={dummyUser.events} />
          )}
          {selectedOption === "Profile" &&
            (googleUser !== null ? (
              <UserProfile
                username=""
                name={googleUser.name}
                email={googleUser.email}
                bio=""
                phone=""
                address=""
                id=""
              />
            ) : (
              <UserProfile
                username={normalUser.username}
                name={""}
                email={normalUser.email}
                bio=""
                phone=""
                address=""
                id={normalUser.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default UserProfilePage;
