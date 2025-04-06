import axios from "axios";
import { useState, useEffect } from "react";
import { URL } from "../../constants";
import { toast } from "react-toastify";

function AppointmentsList({ doctorId }) {
  // In a real app, you would fetch this data from an API
  const [appointments, setAppointments] = useState([]);

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `${URL}/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          `${URL}/appointment/getDoctorAppointments`,
          {
            withCredentials: true,
          }
        );
        console.log(data);
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, [doctorId]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#eab308";
      case "Completed":
        return "#22c55e";
      case "Cancelled":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Appointments
      </h2>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  borderBottom: "1px solid #eee",
                  color: "#4b5563",
                  fontWeight: "bold",
                }}
              >
                Patient
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  borderBottom: "1px solid #eee",
                  color: "#4b5563",
                  fontWeight: "bold",
                }}
              >
                Date
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  borderBottom: "1px solid #eee",
                  color: "#4b5563",
                  fontWeight: "bold",
                }}
              >
                Doctor
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  borderBottom: "1px solid #eee",
                  color: "#4b5563",
                  fontWeight: "bold",
                }}
              >
                Department
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  borderBottom: "1px solid #eee",
                  color: "#4b5563",
                  fontWeight: "bold",
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: "12px 15px",
                  textAlign: "left",
                  borderBottom: "1px solid #eee",
                  color: "#4b5563",
                  fontWeight: "bold",
                }}
              >
                Visited
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                style={{ borderBottom: "1px solid #eee" }}
              >
                <td style={{ padding: "12px 15px" }}>
                  {appointment.firstName} {appointment.lastName}
                </td>
                <td style={{ padding: "12px 15px" }}>
                  {appointment.appointment_date}
                </td>
                <td style={{ padding: "12px 15px" }}>
                  {appointment.doctor.firstName} {appointment.doctor.lastName}
                </td>
                <td style={{ padding: "12px 15px" }}>
                  {appointment.department}
                </td>
                <td style={{ padding: "12px 15px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        backgroundColor: getStatusColor(appointment.status),
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      {appointment.status}
                    </span>
                    <select
                      value={appointment.status}
                      onChange={(e) =>
                        updateAppointmentStatus(appointment._id, e.target.value)
                      }
                      style={{
                        marginLeft: "10px",
                        padding: "6px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        cursor: "pointer",
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </td>
                <td style={{ padding: "12px 15px" }}>
                  <button
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#ef4444",
                      color: "white",
                      border: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {appointments.length === 0 && (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          No appointments found.
        </div>
      )}
    </div>
  );
}

export default AppointmentsList;
