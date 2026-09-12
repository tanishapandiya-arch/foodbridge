import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/auth.css";
import { signup } from "../services/api.js";

function DonorRegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    // Check password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {

      const data = await signup({
        name,
        email,
        password,
        role: "donor"
      });

      console.log("Signup response:", data);

      // Save token
      localStorage.setItem("token", data.token);

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Update navbar
      window.dispatchEvent(
        new Event("authChange")
      );

      alert("Registration successful!");

      // Go to donor dashboard
      navigate("/donor-dashboard");

    } catch (error) {

      console.log("Registration error:", error);

      setError(
        error.message || "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          FoodBridge 🌱
        </div>

        <h1>Donor Registration</h1>

        <p className="auth-subtitle">
          Join FoodBridge and start donating surplus food.
        </p>


        <form onSubmit={handleRegister}>

          {/* NAME */}

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

          </div>


          {/* EMAIL */}

          <div className="input-group">

            <label>Email</label>

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


          {/* PHONE */}

          <div className="input-group">

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>


          {/* CONFIRM PASSWORD */}

          <div className="input-group">

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
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


          {/* BUTTON */}

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >

            {loading
              ? "Registering..."
              : "Register as Donor"
            }

          </button>

        </form>

      </div>

    </div>

  );
}

export default DonorRegister;