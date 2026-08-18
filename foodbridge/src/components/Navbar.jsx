import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      {/* LOGO */}

      <Link to="/" className="logo">
        FoodBridge 🌱
      </Link>


      <div className="nav-links">

        {/* HOME */}

        <Link to="/">
          Home
        </Link>


        {/* NGOS */}

        <Link to="/ngos">
          NGOs
        </Link>


        {/* ABOUT */}

        <Link to="/about">
          About
        </Link>


        {/* LOGIN */}

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>


        {/* REGISTER */}

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;