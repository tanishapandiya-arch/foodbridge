import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-hero">
          <h1>About FoodBridge 🌱</h1>

          <p>
            FoodBridge is a food donation platform that connects surplus
            food donors with verified NGOs, helping reduce food waste
            and support communities in need.
          </p>
        </div>

        <section className="about-section">
          <h2>Our Mission 🤝</h2>

          <p>
            Every day, usable food is wasted while many communities
            face food insecurity. FoodBridge aims to bridge this gap by
            making food donation simple, transparent and accessible.
          </p>
        </section>

        <section className="about-section">
          <h2>How FoodBridge Works 🍱</h2>

          <div className="about-cards">

            <div className="about-card">
              <div className="about-icon">🍚</div>
              <h3>Donors</h3>
              <p>
                Donors can post details about their surplus food,
                quantity, pickup time and location.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">🤝</div>
              <h3>Verified NGOs</h3>
              <p>
                Verified NGOs can browse available donations and
                claim food suitable for their organization.
              </p>
            </div>

            <div className="about-card">
              <div className="about-icon">🌱</div>
              <h3>Social Impact</h3>
              <p>
                By connecting surplus food with organizations that
                need it, FoodBridge helps reduce unnecessary food waste.
              </p>
            </div>

          </div>
        </section>

        <section className="about-section">
          <h2>Why FoodBridge? 💚</h2>

          <div className="about-points">
            <div>
              <strong>♻️ Reduce Food Waste</strong>
              <p>
                Give surplus food a meaningful purpose instead of
                letting it go to waste.
              </p>
            </div>

            <div>
              <strong>🔐 Trusted Network</strong>
              <p>
                NGO verification helps create a safer and more
                reliable donation ecosystem.
              </p>
            </div>

            <div>
              <strong>📋 Simple & Transparent</strong>
              <p>
                Clear food details make the donation and claiming
                process easier for everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="about-goal">
          <h2>Our Goal 🌍</h2>

          <p>
            <strong>
              Turn surplus food into meaningful impact.
            </strong>
          </p>

          <span>
            Reduce waste • Support communities • Build a better future
          </span>
        </section>

      </div>
    </div>
  );
}

export default About;