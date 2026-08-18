import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";

function NGODashboard() {

  const [foods, setFoods] = useState([]);
  const [claimedFoods, setClaimedFoods] = useState([]);

  const [loading, setLoading] = useState(true);
  const [claimedLoading, setClaimedLoading] = useState(true);

  const [error, setError] = useState("");
  const [claimedError, setClaimedError] = useState("");

  const [claimingId, setClaimingId] = useState("");

  const token = localStorage.getItem("token");


  // ==================== GET AVAILABLE FOODS ====================

  const fetchFoods = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/food",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch food posts"
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


  // ==================== GET CLAIMED FOODS ====================

  const fetchClaimedFoods = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/food/claimed-food",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
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
      setClaimedError(error.message);

    } finally {

      setClaimedLoading(false);

    }
  };


  // ==================== CLAIM FOOD ====================

  const handleClaim = async (foodId) => {

    setClaimingId(foodId);

    try {

      const response = await fetch(
        `http://localhost:5000/api/food/${foodId}/claim`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to claim food"
        );
      }

      alert("Food claimed successfully! 🎉");

      // Refresh both sections
      fetchFoods();
      fetchClaimedFoods();

    } catch (error) {

      console.log(error);
      alert(error.message);

    } finally {

      setClaimingId("");

    }
  };


  // ==================== LOAD DATA ====================

  useEffect(() => {

    fetchFoods();
    fetchClaimedFoods();

  }, []);


  // ==================== UI ====================

  return (

    <div style={{ padding: "30px" }}>

      {/* ==================== HEADER ==================== */}

      <h1>
        NGO Dashboard 🤝
      </h1>

      <p>
        Welcome to FoodBridge 🌱
      </p>

      <LogoutButton />


      {/* ==================== AVAILABLE FOOD ==================== */}

      <h2 style={{ marginTop: "40px" }}>
        Available Food
      </h2>


      {loading && (
        <p>
          Loading food posts...
        </p>
      )}


      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}


      {!loading && !error && foods.length === 0 && (
        <p>
          No food posts available.
        </p>
      )}


      {!loading && !error && foods.length > 0 && (

        <div>

          {foods.map((food) => (

            <div
              key={food._id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                margin: "15px 0",
                borderRadius: "10px"
              }}
            >

              <h3>
                {food.foodType}
              </h3>

              <p>
                Quantity: {food.quantity}
              </p>

              <p>
                Description: {food.description}
              </p>

              <p>
                Pickup: {food.pickupTime}
              </p>

              <p>
                Location: {food.location}
              </p>

              <p>
                Status:{" "}
                <strong>
                  {food.status}
                </strong>
              </p>


              {food.donor && (

                <p>
                  Donor: {food.donor.name}
                </p>

              )}


              {food.status === "available" && (

                <button
                  onClick={() => handleClaim(food._id)}
                  disabled={claimingId === food._id}
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                  }}
                >

                  {claimingId === food._id
                    ? "Claiming..."
                    : "Claim Food"
                  }

                </button>

              )}

            </div>

          ))}

        </div>

      )}


      {/* ==================== CLAIMED FOODS ==================== */}

      <h2 style={{ marginTop: "50px" }}>
        My Claimed Foods
      </h2>


      {claimedLoading && (
        <p>
          Loading claimed foods...
        </p>
      )}


      {claimedError && (
        <p style={{ color: "red" }}>
          {claimedError}
        </p>
      )}


      {!claimedLoading &&
        !claimedError &&
        claimedFoods.length === 0 && (

          <p>
            You haven't claimed any food yet.
          </p>

        )
      }


      {!claimedLoading &&
        !claimedError &&
        claimedFoods.length > 0 && (

          <div>

            {claimedFoods.map((food) => (

              <div
                key={food._id}
                style={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  margin: "15px 0",
                  borderRadius: "10px"
                }}
              >

                <h3>
                  {food.foodType}
                </h3>

                <p>
                  Quantity: {food.quantity}
                </p>

                <p>
                  Description: {food.description}
                </p>

                <p>
                  Pickup: {food.pickupTime}
                </p>

                <p>
                  Location: {food.location}
                </p>

                <p>
                  Status:{" "}
                  <strong>
                    {food.status}
                  </strong>
                </p>

              </div>

            ))}

          </div>

        )
      }

    </div>

  );
}

export default NGODashboard;