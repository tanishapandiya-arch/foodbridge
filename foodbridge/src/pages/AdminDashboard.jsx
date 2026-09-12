import { useEffect, useState } from "react";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchNGOs = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/ngos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch NGOs");
      }

      setNgos(data.ngos);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (ngoId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/ngos/${ngoId}/verify`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to verify NGO");
      }

      alert("NGO verified successfully! ✅");

      fetchNGOs();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchNGOs();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <div className="dashboard-card dashboard-loading">
            <h2>Loading Admin Dashboard...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>Admin Dashboard 👑</h1>
            <p>
              Manage and verify registered NGOs on FoodBridge.
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
            <span className="stat-label">Total NGOs</span>
            <strong>{ngos.length}</strong>
          </div>

          <div className="dashboard-card stat-card">
            <span className="stat-label">Verified NGOs</span>
            <strong>
              {ngos.filter((ngo) => ngo.isVerified).length}
            </strong>
          </div>

          <div className="dashboard-card stat-card">
            <span className="stat-label">Pending Verification</span>
            <strong>
              {ngos.filter((ngo) => !ngo.isVerified).length}
            </strong>
          </div>
        </div>

        {/* NGO SECTION */}
        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h2>Registered NGOs</h2>
              <p>Review and verify NGO accounts.</p>
            </div>
          </div>

          {ngos.length === 0 ? (
            <div className="dashboard-card empty-state">
              <h3>No NGOs registered yet.</h3>
              <p>
                Registered NGOs will appear here for verification.
              </p>
            </div>
          ) : (
            <div className="ngo-grid">
              {ngos.map((ngo) => (
                <div className="dashboard-card ngo-card" key={ngo._id}>

                  <div className="ngo-card-top">
                    <div className="ngo-icon">🏢</div>

                    <span
                      className={`status-badge ${
                        ngo.isVerified
                          ? "status-verified"
                          : "status-pending"
                      }`}
                    >
                      {ngo.isVerified
                        ? "Verified"
                        : "Pending"}
                    </span>
                  </div>

                  <h3>{ngo.name}</h3>

                  <div className="ngo-details">
                    <p>
                      <span>Email</span>
                      {ngo.email}
                    </p>

                    <p>
                      <span>Role</span>
                      {ngo.role}
                    </p>
                  </div>

                  {ngo.isVerified ? (
                    <div className="verified-message">
                      ✓ This NGO is verified
                    </div>
                  ) : (
                    <button
                      className="dashboard-primary-btn verify-btn"
                      onClick={() => handleVerify(ngo._id)}
                    >
                      Verify NGO
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default AdminDashboard;