import { useEffect, useState } from "react";
import "../styles/dashboard.css";

function DonorDashboard() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [location, setLocation] = useState("");

  const token = localStorage.getItem("token");

  const fetchMyFoods = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/food/my-food",
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

  const handlePostFood = async (e) => {
    e.preventDefault();

    setFormError("");
    setFormSuccess("");
    setFormLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/food",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            foodType,
            quantity: Number(quantity),
            description,
            pickupTime,
            location,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to post food"
        );
      }

      setFormSuccess("Food posted successfully! 🎉");

      setFoodType("");
      setQuantity("");
      setDescription("");
      setPickupTime("");
      setLocation("");

      fetchMyFoods();
    } catch (error) {
      console.log(error);
      setFormError(error.message);
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    fetchMyFoods();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>Donor Dashboard 🌱</h1>
            <p>
              Share surplus food and make a difference in your community.
            </p>
          </div>
        </div>

        {/* POST FOOD */}
        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h2>🍱 Post Surplus Food</h2>
              <p>
                Add details about the food you want to donate.
              </p>
            </div>
          </div>

          <div className="dashboard-card form-card">

            {formError && (
              <div className="dashboard-alert dashboard-error">
                {formError}
              </div>
            )}

            {formSuccess && (
              <div className="dashboard-alert dashboard-success">
                {formSuccess}
              </div>
            )}

            <form onSubmit={handlePostFood}>
              <div className="dashboard-form-grid">

                <div className="dashboard-form-group">
                  <label>Food Type</label>
                  <input
                    type="text"
                    placeholder="e.g. Rice and Dal"
                    value={foodType}
                    onChange={(e) =>
                      setFoodType(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="dashboard-form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    placeholder="e.g. 20"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(e.target.value)
                    }
                    min="1"
                    required
                  />
                </div>

                <div className="dashboard-form-group form-full">
                  <label>Description</label>
                  <textarea
                    placeholder="Describe the food..."
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                  />
                </div>

                <div className="dashboard-form-group">
                  <label>Pickup Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 6 PM - 8 PM"
                    value={pickupTime}
                    onChange={(e) =>
                      setPickupTime(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="dashboard-form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="e.g. College Hostel"
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                    required
                  />
                </div>

              </div>

              <button
                type="submit"
                className="dashboard-primary-btn"
                disabled={formLoading}
              >
                {formLoading
                  ? "Posting..."
                  : "+ Post Food"}
              </button>
            </form>
          </div>
        </section>

        {/* MY FOOD */}
        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h2>🥗 My Food Posts</h2>
              <p>
                Track the food donations you have posted.
              </p>
            </div>
          </div>

          {loading && (
            <div className="dashboard-card empty-state">
              Loading food posts...
            </div>
          )}

          {error && (
            <div className="dashboard-alert dashboard-error">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            foods.length === 0 && (
              <div className="dashboard-card empty-state">
                <h3>No food posts yet</h3>
                <p>
                  Your food donations will appear here.
                </p>
              </div>
            )}

          {!loading &&
            !error &&
            foods.length > 0 && (
              <div className="food-grid">
                {foods.map((food) => (
                  <div
                    className="dashboard-card food-card"
                    key={food._id}
                  >
                    <div className="food-card-header">
                      <h3>🍚 {food.foodType}</h3>

                      <span
                        className={`status-badge ${
                          food.status === "claimed"
                            ? "status-claimed"
                            : "status-available"
                        }`}
                      >
                        {food.status === "claimed"
                          ? "Claimed"
                          : "Available"}
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

export default DonorDashboard;