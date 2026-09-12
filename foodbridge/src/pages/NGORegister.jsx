import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/auth.css";
import { signup } from "../services/api.js";

function NGORegister() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    // Password check
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
        role: "ngo"
      });

      console.log("NGO Signup response:", data);

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

      alert("NGO Registration successful!");

      // Directly go to NGO Dashboard
      navigate("/ngo-dashboard");

    } catch (error) {

      console.log("NGO Registration error:", error);

      setError(
        error.message || "NGO Registration failed"
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

        <h1>NGO Registration</h1>

        <p className="auth-subtitle">
          Register your NGO with FoodBridge.
        </p>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <label>NGO Name</label>
            <input
              type="text"
              placeholder="Enter NGO name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <label>Registration Number</label>
            <input
              type="text"
              placeholder="Enter registration number"
              value={registrationNumber}
              onChange={(e) =>
                setRegistrationNumber(e.target.value)
              }
              required
            />
          </div>


          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="tel"
              placeholder="Enter contact number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter NGO address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
            />
          </div>


          <div className="input-group">
            <label>NGO Certificate</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>


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


          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? "Registering..."
              : "Register as NGO"
            }
          </button>

        </form>

      </div>

    </div>
  );
}

export default NGORegister;