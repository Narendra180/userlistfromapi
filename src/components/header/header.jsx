import logo from "../../logo.svg";
import "./header.css";

function Header({ searchInputState, onSearchInputChange }) {
  

  return (
    <div
      className="main-header"
    >
      <img src={logo} alt="logo" className="header-logo"/>
      <input
        className="search-input" 
        type="search"
        onChange={onSearchInputChange}
        value={searchInputState}
        placeholder="search user..."
      />
    </div>
  );
}

export default Header;