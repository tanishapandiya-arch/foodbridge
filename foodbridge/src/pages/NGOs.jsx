import "../styles/ngos.css";

function NGOs() {
  return (
    <div className="ngos-page">
      <div className="ngos-container">

        <h1>FoodBridge for NGOs 🤝</h1>

        <p className="ngos-intro">
          FoodBridge helps verified NGOs access surplus food donations
          from individuals, restaurants, hostels, events and other donors —
          making food recovery simple and transparent.
        </p>

        <section className="ngos-section">
          <h2>For NGOs 🍱</h2>

          <ul>
            <li>Register your NGO on FoodBridge.</li>
            <li>Get verified by an admin to join the trusted donation network.</li>
            <li>Browse available food donations shared by donors.</li>
            <li>Claim suitable food donations for your organization.</li>
            <li>Track your claimed donations from your dashboard.</li>
          </ul>
        </section>

        <section className="ngos-section">
          <h2>Why Verification Matters 🔐</h2>

          <p>
            Only verified NGOs can access and claim food donations.
            This helps prevent misuse and keeps the platform safe,
            reliable and trustworthy for both donors and NGOs.
          </p>
        </section>

        <section className="ngos-section">
          <h2>How FoodBridge Helps 🌱</h2>

          <p>
            FoodBridge connects surplus food with organizations that
            can put it to meaningful use — helping reduce food waste
            while supporting communities in need.
          </p>
        </section>

        <section className="ngos-section goal-section">
          <h2>Our Goal 💚</h2>

          <p>
            <strong>
              Reduce food waste. Support communities. Create impact.
            </strong>
          </p>
        </section>

      </div>
    </div>
  );
}

export default NGOs;