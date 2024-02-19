import "./UserProfile.css";
const UserProfile: React.FC = () => {
  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-header">
          <h1>Your Details</h1>
        </div>
        <div className="user-details-1">
          <p className="user-name">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Name:
            </span>{" "}
            Pushkar Patil
          </p>
          <p className="user-email">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Email:
            </span>{" "}
            pushkar14.patil@gmail.com
          </p>
        </div>
        <div className="user-details-2">
          <p className="user-username">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Username:
            </span>{" "}
            pushkar14
          </p>
          <p className="user-phone">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Phone:
            </span>{" "}
            1234567890
          </p>
          <p className="country">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Country:
            </span>{" "}
            India
          </p>
          <p className="user-address">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Address:
            </span>{" "}
            123, XYZ Road, Pune, Maharashtra, India
          </p>
        </div>
        {/* <div className="user-details-form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />
        </div> */}
      </div>
    </>
  );
};
export default UserProfile;
