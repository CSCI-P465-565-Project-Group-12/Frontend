import { useNavigate } from "react-router";
import welcomeImg from "../../assets/Welcome-cuate.png";
const RegisterSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1
        style={{
          marginBottom: "0",
        }}
      >
        Register Success!!
      </h1>
      <p>You have successfully registered.</p>
      <img
        src={welcomeImg}
        alt=""
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <h3>
        Login{" "}
        <span
          onClick={() => {
            navigate("/login", { state: { linkFor: "login" } });
          }}
          style={{
            color: "#6b6b6b",
            cursor: "pointer",
          }}
        >
          here
        </span>
      </h3>
    </div>
  );
};
export default RegisterSuccessPage;
