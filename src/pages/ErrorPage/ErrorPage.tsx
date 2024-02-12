import NotFound from "../../assets/404 Error Page not Found with people connecting a plug-pana.png";
import BadRequest from "../../assets/400 Error Bad Request-pana.png";
import { useLocation } from "react-router";

interface IErrorPageProps {
  errorType: string;
}
interface IErrors {
  [key: string]: string;
}
const ErrorPage: React.FC<IErrorPageProps> = (props) => {
  const errors: IErrors = {
    "404": NotFound,
    "400": BadRequest,
  };
  const location = useLocation();
  const errorTypeFromLocation = location.state as IErrorPageProps;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={
          errorTypeFromLocation === undefined
            ? errors[props.errorType]
            : errors[errorTypeFromLocation.errorType]
        }
        alt="Error"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};
export default ErrorPage;
