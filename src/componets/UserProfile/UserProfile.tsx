import ReactCreditCards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./UserProfile.css";
import { useEffect, useState } from "react";

const dummyCardDetails = {
  number: "5011 0544 8859 7827",
  expiry: "12/24",
  cvc: "123",
  name: "Pushkar Patil",
  focus: "name",
};
interface IUserProfileProps {
  id: string;
  name: string;
  bio: string;
  email: string;
  username: string;
  phone: string;
  address: string;
}
const UserProfile: React.FC<IUserProfileProps> = (props) => {
  const [cardDetails, setCardDetails] = useState(dummyCardDetails);
  const [user, setUser] = useState({
    name: props.name,
    email: props.email,
    username: props.username,
    phone: props.phone,
    address: props.address,
  });

  const [isUserEditing, setIsUserEditing] = useState({
    name: false,
    email: false,
    username: false,
    phone: false,
    address: false,
  });
  const [isCardEditing, setIsCardEditing] = useState(false);
  console.log(isUserEditing);
  useEffect(() => {
    if (
      isUserEditing.name ||
      isUserEditing.email ||
      isUserEditing.username ||
      isUserEditing.phone ||
      isUserEditing.address
    ) {
      const userDetails2: HTMLDivElement = document.querySelector(
        ".user-details-2"
      ) as HTMLDivElement;
      userDetails2.style.border = "none";
    } else {
      const userDetails2: HTMLDivElement = document.querySelector(
        ".user-details-2"
      ) as HTMLDivElement;
      userDetails2.style.borderBottom = "1px solid #caf0f8";
    }
  }, [isUserEditing]);
  return (
    <>
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
                    const nameInput: HTMLInputElement = document.querySelector(
                      ".user-name input"
                    ) as HTMLInputElement;
                    setIsUserEditing({
                      ...isUserEditing,
                      name: !isUserEditing.name,
                    });
                    if (isUserEditing.name) {
                      nameInput.style.border = "none";
                    } else {
                      nameInput.style.border = "1px solid #caf0f8";
                      nameInput.style.borderRadius = "5px";
                    }
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
                    const emailInput: HTMLInputElement = document.querySelector(
                      ".user-email input"
                    ) as HTMLInputElement;
                    setIsUserEditing({
                      ...isUserEditing,
                      email: !isUserEditing.email,
                    });
                    if (isUserEditing.email) {
                      emailInput.style.border = "none";
                    } else {
                      emailInput.style.border = "1px solid #caf0f8";
                      emailInput.style.borderRadius = "5px";
                    }
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
                    isUserEditing.username
                      ? "bi bi-check"
                      : "bi bi-pencil-square"
                  }
                  onClick={() => {
                    const usernameInput: HTMLInputElement =
                      document.querySelector(
                        ".user-username input"
                      ) as HTMLInputElement;
                    setIsUserEditing({
                      ...isUserEditing,
                      username: !isUserEditing.username,
                    });
                    if (isUserEditing.username) {
                      usernameInput.style.border = "none";
                    } else {
                      usernameInput.style.border = "1px solid #caf0f8";
                      usernameInput.style.borderRadius = "5px";
                    }
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
                    const phoneInput: HTMLInputElement = document.querySelector(
                      ".user-phone input"
                    ) as HTMLInputElement;
                    setIsUserEditing({
                      ...isUserEditing,
                      phone: !isUserEditing.phone,
                    });
                    if (isUserEditing.phone) {
                      phoneInput.style.border = "none";
                    } else {
                      phoneInput.style.border = "1px solid #caf0f8";
                      phoneInput.style.borderRadius = "5px";
                    }
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
              <textarea
                cols={30}
                rows={1}
                placeholder="Address"
                value={user.address}
                className="user-input"
                onChange={(e) => {
                  setUser({
                    ...user,
                    address: e.target.value,
                  });
                }}
                disabled={isUserEditing.address ? false : true}
              />
              <span className="edit-icon">
                <i
                  className={
                    isUserEditing.address
                      ? "bi bi-check"
                      : "bi bi-pencil-square"
                  }
                  onClick={() => {
                    const addressInput: HTMLTextAreaElement =
                      document.querySelector(
                        ".user-address textarea"
                      ) as HTMLTextAreaElement;
                    setIsUserEditing({
                      ...isUserEditing,
                      address: !isUserEditing.address,
                    });
                    if (isUserEditing.address) {
                      addressInput.style.border = "none";
                    } else {
                      addressInput.style.border = "1px solid #caf0f8";
                      addressInput.style.borderRadius = "5px";
                    }
                  }}
                />
              </span>
            </p>
          </div>
          {isUserEditing.name ||
          isUserEditing.email ||
          isUserEditing.username ||
          isUserEditing.phone ||
          isUserEditing.address ? (
            <div className="save-details">
              <button>Save Details</button>
            </div>
          ) : null}

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
    </>
  );
};

export default UserProfile;
