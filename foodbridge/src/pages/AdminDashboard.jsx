import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";


function AdminDashboard() {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  // ==================== GET ALL NGOS ====================

  const fetchNGOs = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/ngos",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch NGOs"
        );
      }

      setNgos(data.ngos);

    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  // ==================== VERIFY NGO ====================

  const handleVerify = async (ngoId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/ngos/${ngoId}/verify`,
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
          data.message || "Failed to verify NGO"
        );
      }

      alert("NGO verified successfully! ✅");

      // Refresh NGO list
      fetchNGOs();

    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };


  // ==================== LOAD NGOS ====================

  useEffect(() => {
    fetchNGOs();
  }, []);


  // ==================== LOADING ====================

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Loading Admin Dashboard...</h2>
      </div>
    );
  }


  // ==================== UI ====================

  return (
    <div style={{ padding: "40px" }}>

      <h1>
        Admin Dashboard 👑
      </h1>
 <LogoutButton />
      <p>
        Manage and verify FoodBridge NGOs.
      </p>


      {/* ERROR */}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}


      {/* ==================== NGO LIST ==================== */}

      <h2 style={{ marginTop: "40px" }}>
        Registered NGOs
      </h2>


      {ngos.length === 0 ? (
        <p>
          No NGOs registered yet.
        </p>
      ) : (

        ngos.map((ngo) => (

          <div
            key={ngo._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px"
            }}
          >

            <h3>
              {ngo.name}
            </h3>

            <p>
              <strong>Email:</strong>{" "}
              {ngo.email}
            </p>

            <p>
              <strong>Role:</strong>{" "}
              {ngo.role}
            </p>


            <p>
              <strong>Status:</strong>{" "}

              {ngo.isVerified ? (
                <span style={{ color: "green" }}>
                  Verified ✅
                </span>
              ) : (
                <span style={{ color: "orange" }}>
                  Not Verified
                </span>
              )}

            </p>


            {!ngo.isVerified && (

              <button
                onClick={() => handleVerify(ngo._id)}
                style={{
                  padding: "10px 20px",
                  cursor: "pointer"
                }}
              >
                Verify NGO
              </button>

            )}

          </div>

        ))

      )}

    </div>
  );
}

export default AdminDashboard;