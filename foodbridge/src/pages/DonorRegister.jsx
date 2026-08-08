import "../styles/auth.css";

function DonorRegister() {
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

        <form>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button className="auth-btn">
            Register as Donor
          </button>

        </form>

      </div>

    </div>
  );
}

export default DonorRegister;