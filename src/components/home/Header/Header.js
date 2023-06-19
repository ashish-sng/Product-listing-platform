import "./Header.css";
import { useNavigate } from "react-router-dom";
import useProductContext from "../../../hooks/useProductContext";

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useProductContext();

  const onHeaderLogin = () => {
    navigate("/login");
  };

  const logoutHeader = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const onHeaderSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="header">
      <span>Feedback</span>
      {loggedIn ? (
        <div className="header__loggedIn">
          <button className="header__logout__button" onClick={logoutHeader}>Logout</button>
          <span>Hello! </span>
          <img
            src={
              "https://i.pinimg.com/236x/fc/13/16/fc131621e8538ac6e07de67a00f9eaf5.jpg"
            }
            alt="user"
          />
        </div>
      ) : (
        <div className="header__buttons">
          <button className="header__login__button" onClick={onHeaderLogin}>
            Login
          </button>
          <button className="header__signup__button" onClick={onHeaderSignup}>
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
