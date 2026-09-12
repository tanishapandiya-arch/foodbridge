import { useNavigate } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import FoodCards from "../components/FoodCards";

function Home() {
  const navigate = useNavigate();

  const handleDonateFood = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {
      navigate("/register/donor");
      return;
    }

    if (user.role === "donor") {
      navigate("/donor-dashboard");
    } else {
      alert("Only donors can post food donations.");
    }
  };

  const handleFindFood = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {
      navigate("/register/ngo");
      return;
    }

    if (user.role === "ngo") {
      navigate("/ngo-dashboard");
    } else {
      alert("Only NGOs can find and claim food.");
    }
  };

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

            <button
              className="primary-btn"
              onClick={handleDonateFood}
            >
              Donate Food
            </button>

            <button
              className="secondary-btn"
              onClick={handleFindFood}
            >
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