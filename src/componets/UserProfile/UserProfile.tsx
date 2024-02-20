import ReactCreditCards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./UserProfile.css";
import { useState } from "react";

const dummyCardDetails = {
  number: "5011 0544 8859 7827",
  expiry: "12/24",
  cvc: "123",
  name: "Pushkar Patil",
  focus: "name",
};
const dummyUser = {
  name: "John Doe",
  email: "johndoe@iu.edu",
  username: "johndoe",
  phone: "1234567890",
  country: "India",
  address: "123, XYZ Road, Pune, Maharashtra, India",
};
const UserProfile: React.FC = () => {
  const [cardDetails, setCardDetails] = useState(dummyCardDetails);
  const [user, setUser] = useState(dummyUser);
  const [isUserEditing, setIsUserEditing] = useState({
    name: false,
    email: false,
    username: false,
    phone: false,
    country: false,
  });
  const [isCardEditing, setIsCardEditing] = useState(false);
  console.log(isUserEditing);

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
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              className="user-input"
              onChange={(e) => {
                setUser({
                  ...user,
                  name: e.target.value,
                });
              }}
              disabled={isUserEditing.name ? false : true}
            />{" "}
            <span className="edit-icon">
              <i
                className={
                  isUserEditing.name ? "bi bi-check" : "bi bi-pencil-square"
                }
                onClick={() => {
                  setIsUserEditing({
                    ...isUserEditing,
                    name: !isUserEditing.name,
                  });
                }}
              />
            </span>
          </p>
          <p className="user-email">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Email:
            </span>{" "}
            <input
              type="text"
              placeholder="Email"
              value={user.email}
              className="user-input"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
              disabled={isUserEditing.email ? false : true}
            />
            <span className="edit-icon">
              <i
                className={
                  isUserEditing.email ? "bi bi-check" : "bi bi-pencil-square"
                }
                onClick={() => {
                  setIsUserEditing({
                    ...isUserEditing,
                    email: !isUserEditing.email,
                  });
                }}
              />
            </span>
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
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              className="user-input"
              onChange={(e) => {
                setUser({
                  ...user,
                  username: e.target.value,
                });
              }}
              disabled={isUserEditing.username ? false : true}
            />
            <span className="edit-icon">
              <i
                className={
                  isUserEditing.username ? "bi bi-check" : "bi bi-pencil-square"
                }
                onClick={() => {
                  setIsUserEditing({
                    ...isUserEditing,
                    username: !isUserEditing.username,
                  });
                }}
              />
            </span>
          </p>
          <p className="user-phone">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Phone:
            </span>{" "}
            <input
              type="text"
              placeholder="Phone"
              value={user.phone}
              className="user-input"
              onChange={(e) => {
                setUser({
                  ...user,
                  phone: e.target.value,
                });
              }}
              disabled={isUserEditing.phone ? false : true}
            />
            <span className="edit-icon">
              <i
                className={
                  isUserEditing.phone ? "bi bi-check" : "bi bi-pencil-square"
                }
                onClick={() => {
                  setIsUserEditing({
                    ...isUserEditing,
                    phone: !isUserEditing.phone,
                  });
                }}
              />
            </span>
          </p>
          <p className="country">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Country:
            </span>{" "}
            <input
              type="text"
              placeholder="Country"
              value={user.country}
              className="user-input"
              onChange={(e) => {
                setUser({
                  ...user,
                  country: e.target.value,
                });
              }}
              disabled={isUserEditing.country ? false : true}
            />
            <span className="edit-icon">
              <i
                className={
                  isUserEditing.country ? "bi bi-check" : "bi bi-pencil-square"
                }
                onClick={() => {
                  setIsUserEditing({
                    ...isUserEditing,
                    country: !isUserEditing.country,
                  });
                }}
              />
            </span>
          </p>
          <p className="user-address">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Address:
            </span>{" "}
            123, XYZ Road, Pune, Maharashtra, India{" "}
            <span className="edit-icon">
              <i className="bi bi-pencil-square" />
            </span>
          </p>
        </div>
        <div className="user-payment-details">
          <h2>Payment Details</h2>
          <div className="payments-container">
            <ReactCreditCards
              number={cardDetails.number}
              name={cardDetails.name}
              expiry={cardDetails.expiry}
              cvc={cardDetails.cvc}
              focused={cardDetails.focus as any}
            />
            {isCardEditing ? (
              <>
                <div className="card-details-form">
                  <div className="form-group">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                      type="text"
                      id="card-number"
                      placeholder="Card Number"
                      value={cardDetails.number}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          number: e.target.value,
                        })
                      }
                      onFocus={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          focus: e.target.name,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-name">Name</label>
                    <input
                      type="text"
                      id="card-name"
                      placeholder="Name"
                      value={cardDetails.name}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          name: e.target.value,
                        })
                      }
                      onFocus={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          focus: e.target.name,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-expiry">Expiry</label>
                    <input
                      type="text"
                      id="card-expiry"
                      placeholder="Expiry"
                      value={cardDetails.expiry}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          expiry: e.target.value,
                        })
                      }
                      onFocus={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          focus: e.target.name,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-cvc">CVC</label>
                    <input
                      type="password"
                      id="card-cvc"
                      name="cvc"
                      placeholder="CVC"
                      value={cardDetails.cvc}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cvc: e.target.value,
                        })
                      }
                      onFocus={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          focus: e.target.name,
                        })
                      }
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="card-details">
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Card Number:
                    </span>{" "}
                    {cardDetails.number}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Name:
                    </span>{" "}
                    {cardDetails.name}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Expiry:
                    </span>{" "}
                    {cardDetails.expiry}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      CVC:
                    </span>{" "}
                    {cardDetails.cvc}
                  </p>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <button
              onClick={() => {
                setIsCardEditing(!isCardEditing);
              }}
            >
              {isCardEditing ? (
                "Save"
              ) : (
                <>
                  <i className="bi bi-pencil-square" />
                  Edit Card Details
                </>
              )}
            </button>
            <button>Add a card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
