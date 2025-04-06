import { useContext, useEffect, useState } from "react";
import DoctorDetails from "./DoctorDetails.jsx";
import AppointmentsList from "./AppointmentLists.jsx";
import EditDoctorForm from "./EditDoctorForm.jsx";
import Sidebar from "./Sidebardoc.jsx";
import StatCards from "./StatsCard.jsx";
import WelcomeCard from "./WelcomeCard.jsx";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../../constants.js";
import { Navigate } from "react-router-dom";

function DoctorDashboard({
  doctor,
  showLoginSuccess
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  

  const onLogout = () => {
    const response = axios.get(`${URL}/user/doctor/logout`, {
      withCredentials: true,
    });
    console.log(response.data);
    window.location.reload();
    toast.success("Logout Successfully!");
    
  }

  const updateDoctorDetails = async (updatedDoctor) => {
    console.log("Updated Doctor Details:", updatedDoctor);
    try {
      const response = await axios.post(
        `${URL}/user/editdoctor/${doctor._id}`,
        updatedDoctor,
        { withCredentials: true }
      );
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }
  
  

  const { isAuthenticated } = useContext(Context);
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={onLogout}
      />

      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {/* Success notification */}
        {showLoginSuccess && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "15px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ✓
            </div>
            <span>User Login Successfully!</span>
            <button
              onClick={() => {}}
              style={{
                marginLeft: "15px",
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: "#666",
              }}
            >
              ×
            </button>
          </div>
        )}

        {activeTab === "dashboard" && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <WelcomeCard doctor={doctor} />
              <StatCards/>
            </div>
            <AppointmentsList doctorId={doctor._id}/>
          </>
        )}

        {activeTab === "profile" && <DoctorDetails doctor={doctor} />}

        {activeTab === "edit" && (
          <EditDoctorForm
            doctor={doctor}
            updateDoctorDetails={updateDoctorDetails}
          />
        )}
      </div>
    </div>
  );
}

export default DoctorDashboard;
