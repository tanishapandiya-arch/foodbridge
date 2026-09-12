import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const updateAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("authChange", updateAuth);

    return () => {
      window.removeEventListener("authChange", updateAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    window.dispatchEvent(new Event("authChange"));

    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        FoodBridge <span>🌱</span>
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/ngos">NGOs</Link>

        <Link to="/about">About</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-login">
              Login
            </Link>

            <Link to="/register" className="nav-register">
              Register
            </Link>
          </>
        ) : (
          <button
            className="nav-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;