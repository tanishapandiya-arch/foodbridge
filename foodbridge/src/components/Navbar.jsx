import { Link } from "react-router-dom";


function Navbar(){

  return(
    <nav className="navbar">


      <Link to="/" className="logo">
        FoodBridge 🌱
      </Link>


      <div className="nav-links">


        <Link to="/">
          Home
        </Link>


        <Link to="/donate">
          Donate
        </Link>


        <Link to="/ngos">
          NGOs
        </Link>


        <Link to="/about">
          About
        </Link>



        <Link to="/login">

          <button className="login-btn">
            Login
          </button>

        </Link>



        <Link to="/register">

          <button className="register-btn">
            Register
          </button>

        </Link>


      </div>


    </nav>
  )

}


export default Navbar;