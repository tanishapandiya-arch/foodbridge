import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";

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


  // ==================== GET MY FOODS ====================

  const fetchMyFoods = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/food/my-food",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
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


  // ==================== POST FOOD ====================

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
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            foodType,
            quantity: Number(quantity),
            description,
            pickupTime,
            location
          })
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.message || "Failed to post food"
        );

      }


      setFormSuccess(
        "Food posted successfully! 🎉"
      );


      // Clear form

      setFoodType("");
      setQuantity("");
      setDescription("");
      setPickupTime("");
      setLocation("");


      // Refresh food posts

      fetchMyFoods();


    } catch (error) {

      console.log(error);

      setFormError(error.message);

    } finally {

      setFormLoading(false);

    }
  };


  // ==================== LOAD DATA ====================

  useEffect(() => {

    fetchMyFoods();

  }, []);


  // ==================== UI ====================

  return (

    <div style={{ padding: "30px" }}>


      {/* ==================== HEADER ==================== */}

      <h1>
        Donor Dashboard
      </h1>

      <p>
        Welcome to FoodBridge 🌱
      </p>

      <LogoutButton />


      {/* ==================== POST FOOD ==================== */}

      <h2 style={{ marginTop: "40px" }}>
        Post New Food
      </h2>


      <form onSubmit={handlePostFood}>


        {/* FOOD TYPE */}

        <div style={{ marginBottom: "15px" }}>

          <label>
            Food Type
          </label>

          <br />

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


        {/* QUANTITY */}

        <div style={{ marginBottom: "15px" }}>

          <label>
            Quantity
          </label>

          <br />

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


        {/* DESCRIPTION */}

        <div style={{ marginBottom: "15px" }}>

          <label>
            Description
          </label>

          <br />

          <textarea
            placeholder="Describe the food"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

        </div>


        {/* PICKUP TIME */}

        <div style={{ marginBottom: "15px" }}>

          <label>
            Pickup Time
          </label>

          <br />

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


        {/* LOCATION */}

        <div style={{ marginBottom: "15px" }}>

          <label>
            Location
          </label>

          <br />

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


        {/* ERROR */}

        {formError && (

          <p style={{ color: "red" }}>
            {formError}
          </p>

        )}


        {/* SUCCESS */}

        {formSuccess && (

          <p style={{ color: "green" }}>
            {formSuccess}
          </p>

        )}


        {/* BUTTON */}

        <button
          type="submit"
          disabled={formLoading}
        >

          {formLoading
            ? "Posting..."
            : "Post Food"
          }

        </button>

      </form>


      {/* ==================== MY FOOD POSTS ==================== */}

      <h2 style={{ marginTop: "50px" }}>
        My Food Posts
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


      {!loading &&
        !error &&
        foods.length === 0 && (

          <p>
            You haven't posted any food yet.
          </p>

        )
      }


      {!loading &&
        foods.length > 0 && (

          <div>

            {foods.map((food) => (

              <div
                key={food._id}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  margin: "10px 0",
                  borderRadius: "8px"
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

export default DonorDashboard;