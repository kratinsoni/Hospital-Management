import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../../constants";

function StatCards() {
  const [appointments, setAppointments] = useState(0);

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
        setAppointments(data.appointments.length);
      } catch (error) {
        setAppointments(0);
      }
    };
    fetchAppointments();
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#0ea5e9",
          borderRadius: "12px",
          padding: "20px",
          color: "white",
        }}
      >
        <h3
          style={{
            margin: "0 0 15px 0",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Total Appointments
        </h3>

        <p
          style={{
            margin: "0",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          {appointments}
        </p>
      </div>

      
    </div>
  );
}

export default StatCards;
