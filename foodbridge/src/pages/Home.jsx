import HowItWorks from "../components/HowItWorks";
import FoodCards from "../components/FoodCards";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <h1>
            Bridging Food,
            <br />
            People & Purpose 🌱
          </h1>

          <p>
            FoodBridge connects surplus food from donors
            with NGOs and people who need it.
            Together we reduce food waste and fight hunger.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Donate Food
            </button>

            <button className="secondary-btn">
              Find Food
            </button>

          </div>

          <div className="stats">

            <div>
              <h2>10K+</h2>
              <p>Meals Saved</p>
            </div>

            <div>
              <h2>500+</h2>
              <p>Donors</p>
            </div>

            <div>
              <h2>100+</h2>
              <p>NGOs</p>
            </div>

          </div>

        </div>

        <div className="hero-image">
          🍱
        </div>

      </section>

      <HowItWorks />
      <FoodCards />

    </>
  );
}

export default Home;