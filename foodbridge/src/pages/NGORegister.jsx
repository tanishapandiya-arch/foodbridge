import "../styles/auth.css";

function NGORegister() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          FoodBridge 🌱
        </div>

        <h1>NGO Registration</h1>

        <p className="auth-subtitle">
          Register your NGO for verification.
        </p>

        <form>

          <div className="input-group">
            <label>NGO Name</label>
            <input
              type="text"
              placeholder="Enter NGO name"
            />
          </div>

          <div className="input-group">
            <label>Registration Number</label>
            <input
              type="text"
              placeholder="Enter registration number"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="tel"
              placeholder="Enter contact number"
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter NGO address"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <div className="input-group">
            <label>NGO Certificate</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </div>

          <button className="auth-btn">
            Submit for Verification
          </button>

        </form>

      </div>
    </div>
  );
}

export default NGORegister;