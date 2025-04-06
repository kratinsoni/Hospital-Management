function WelcomeCard({ doctor }) {
  return (
    <div
      style={{
        backgroundColor: "#e0e7ff",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="Doctor"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div>
        <h2
          style={{
            margin: "0 0 10px 0",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Hello,{" "}
          <span style={{ color: "#166534", fontWeight: "bold" }}>
            {doctor.firstName} {doctor.lastName}
          </span>
        </h2>

        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#4b5563",
            lineHeight: "1.5",
          }}
        >
          Welcome to the Sanjeevani Medical Institute Dashboard. Here, you have
          comprehensive access to ensure the highest standards of patient care.
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;
