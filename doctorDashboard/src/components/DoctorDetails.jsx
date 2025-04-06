function DoctorDetails({ doctor }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          marginBottom: "20px",
          color: "#333",
          borderBottom: "1px solid #eee",
          paddingBottom: "10px",
        }}
      >
        Doctor Information
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div
            style={{
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{ fontWeight: "bold", marginBottom: "5px", color: "#555" }}
            >
              Doctor ID
            </div>
            <div>{doctor.nic}</div>
          </div>

          <div
            style={{
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{ fontWeight: "bold", marginBottom: "5px", color: "#555" }}
            >
              Name
            </div>
            <div>{doctor.firstName} {doctor.lastName}</div>
          </div>

          <div
            style={{
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{ fontWeight: "bold", marginBottom: "5px", color: "#555" }}
            >
              Email
            </div>
            <div>{doctor.email}</div>
          </div>

          <div
            style={{
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{ fontWeight: "bold", marginBottom: "5px", color: "#555" }}
            >
              Specialization
            </div>
            <div>{doctor.doctorDepartment}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          

          <div
            style={{
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{ fontWeight: "bold", marginBottom: "5px", color: "#555" }}
            >
              Phone
            </div>
            <div>123456</div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
