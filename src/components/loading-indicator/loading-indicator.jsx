import logo from "../../logo.svg";
import "./loading-indicator.css";

function LoadingIndicator() {
  return (
    <div
      className="loading-indicator-conatiner"
    >
      <img src={logo} alt="logo"/>
      <h2>Loading...</h2>
    </div>
  );
}

export default LoadingIndicator;