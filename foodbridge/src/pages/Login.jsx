import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/auth.css";
import { login } from "../services/api.js";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  // ==================== LOGIN ====================

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const data = await login({
        email,
        password
      });

      console.log("Login response:", data);


      // ==================== SAVE TOKEN ====================

      localStorage.setItem(
        "token",
        data.token
      );


      // ==================== SAVE USER ====================

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      alert("Login successful!");


      // ==================== ROLE BASED REDIRECT ====================

      if (data.user.role === "donor") {

        navigate("/donor-dashboard");

      }
      else if (data.user.role === "ngo") {

        navigate("/ngo-dashboard");

      }
      else if (data.user.role === "admin") {

        navigate("/admin-dashboard");

      }
      else {

        setError("Invalid user role");

      }


    } catch (error) {

      console.log("Login error:", error);

      setError(
        error.message || "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };


  // ==================== UI ====================

  return (

    <div className="auth-page">

      <div className="auth-card">


        {/* LOGO */}

        <div className="auth-logo">
          FoodBridge 🌱
        </div>


        {/* HEADING */}

        <h1>
          Welcome Back!
        </h1>


        <p className="auth-subtitle">
          Login to continue helping reduce food waste.
        </p>


        {/* LOGIN FORM */}

        <form onSubmit={handleLogin}>


          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>


          {/* ERROR */}

          {error && (

            <p
              style={{
                color: "red",
                marginBottom: "10px"
              }}
            >
              {error}
            </p>

          )}


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >

            {loading
              ? "Logging in..."
              : "Login"
            }

          </button>


        </form>


        {/* REGISTER */}

        <p className="auth-footer">

          Don't have an account?

          <span
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer" }}
          >
            Register
          </span>

        </p>


      </div>

    </div>

  );
}


export default Login;