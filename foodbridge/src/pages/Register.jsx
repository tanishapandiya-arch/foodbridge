import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          FoodBridge 🌱
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Select how you want to join FoodBridge.
        </p>

        <div className="role-selection">

          <Link to="/register/donor" className="role-link">
            <button className="role-card">
              <span style={{ fontSize: "40px" }}>🍱</span>
              <h3>Donor</h3>
              <p>Donate surplus food</p>
            </button>
          </Link>

          <Link to="/register/ngo" className="role-link">
            <button className="role-card">
              <span style={{ fontSize: "40px" }}>🏢</span>
              <h3>NGO</h3>
              <p>Receive food donations</p>
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Register;