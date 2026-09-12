import { useEffect, useState } from "react";
import "../styles/dashboard.css";

function NGODashboard() {
  const [foods, setFoods] = useState([]);
  const [claimedFoods, setClaimedFoods] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        "https://foodbridge-backend-hhte.onrender.com/api/food",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch foods"
        );
      }

      setFoods(data.foods);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchClaimedFoods = async () => {
    try {
      const response = await fetch(
        "https://foodbridge-backend-hhte.onrender.com/api/food/claimed-food",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch claimed foods"
        );
      }

      setClaimedFoods(data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClaim = async (foodId) => {
    try {
      const response = await fetch(
        `https://foodbridge-backend-hhte.onrender.com/api/food/${foodId}/claim`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to claim food"
        );
      }

      alert("Food claimed successfully! 🎉");

      fetchFoods();
      fetchClaimedFoods();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchFoods();
    fetchClaimedFoods();
  }, []);

  const availableFoods = foods.filter(
    (food) => food.status !== "claimed"
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>NGO Dashboard 🤝</h1>
            <p>
              Find available food donations and help your community.
            </p>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="dashboard-alert dashboard-error">
            {error}
          </div>
        )}

        {/* STATS */}
        <div className="dashboard-stats">

          <div className="dashboard-card stat-card">
            <span className="stat-label">
              Available Food
            </span>
            <strong>{availableFoods.length}</strong>
          </div>

          <div className="dashboard-card stat-card">
            <span className="stat-label">
              My Claimed Food
            </span>
            <strong>{claimedFoods.length}</strong>
          </div>

          <div className="dashboard-card stat-card">
            <span className="stat-label">
              Total Donations
            </span>
            <strong>{foods.length}</strong>
          </div>

        </div>

        {/* AVAILABLE FOOD */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>🍱 Available Food</h2>
              <p>
                Browse food donations available for your NGO.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="dashboard-card empty-state">
              Loading available food...
            </div>
          ) : availableFoods.length === 0 ? (
            <div className="dashboard-card empty-state">
              <h3>No food donations available</h3>
              <p>
                New food donations will appear here.
              </p>
            </div>
          ) : (
            <div className="food-grid">

              {availableFoods.map((food) => (
                <div
                  className="dashboard-card food-card"
                  key={food._id}
                >

                  <div className="food-card-header">

                    <h3>
                      🍚 {food.foodType}
                    </h3>

                    <span className="status-badge status-available">
                      Available
                    </span>

                  </div>

                  <div className="food-info">

                    <span>
                      👥 <strong>Quantity:</strong>{" "}
                      {food.quantity}
                    </span>

                    <span>
                      📝 <strong>Description:</strong>{" "}
                      {food.description || "No description"}
                    </span>

                    <span>
                      🕐 <strong>Pickup:</strong>{" "}
                      {food.pickupTime}
                    </span>

                    <span>
                      📍 <strong>Location:</strong>{" "}
                      {food.location}
                    </span>

                    {food.donor && (
                      <span>
                        👤 <strong>Donor:</strong>{" "}
                        {food.donor.name}
                      </span>
                    )}

                  </div>

                  <button
                    className="dashboard-primary-btn claim-btn"
                    onClick={() =>
                      handleClaim(food._id)
                    }
                  >
                    Claim Food
                  </button>

                </div>
              ))}

            </div>
          )}

        </section>

        {/* CLAIMED FOOD */}
        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <h2>✅ My Claimed Foods</h2>
              <p>
                Food donations claimed by your NGO.
              </p>
            </div>
          </div>

          {claimedFoods.length === 0 ? (

            <div className="dashboard-card empty-state">
              <h3>No claimed food yet</h3>
              <p>
                Foods claimed by your NGO will appear here.
              </p>
            </div>

          ) : (

            <div className="food-grid">

              {claimedFoods.map((food) => (

                <div
                  className="dashboard-card food-card"
                  key={food._id}
                >

                  <div className="food-card-header">

                    <h3>
                      🍚 {food.foodType}
                    </h3>

                    <span className="status-badge status-claimed">
                      Claimed
                    </span>

                  </div>

                  <div className="food-info">

                    <span>
                      👥 <strong>Quantity:</strong>{" "}
                      {food.quantity}
                    </span>

                    <span>
                      🕐 <strong>Pickup:</strong>{" "}
                      {food.pickupTime}
                    </span>

                    <span>
                      📍 <strong>Location:</strong>{" "}
                      {food.location}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>
    </div>
  );
}

export default NGODashboard;