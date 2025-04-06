function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const iconStyle = {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    color: "white",
    cursor: "pointer",
    fontSize: "20px",
  };

  const activeIconStyle = {
    ...iconStyle,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  };

  return (
    <div
      style={{
        width: "80px",
        backgroundColor: "#4338ca",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      {/* Home icon */}
      <div
        style={activeTab === "dashboard" ? activeIconStyle : iconStyle}
        onClick={() => setActiveTab("dashboard")}
      >
        <span>🏠</span>
      </div>

      {/* Profile icon */}
      <div
        style={activeTab === "profile" ? activeIconStyle : iconStyle}
        onClick={() => setActiveTab("profile")}
      >
        <span>👨‍⚕️</span>
      </div>

      {/* Edit profile icon */}
      <div
        style={activeTab === "edit" ? activeIconStyle : iconStyle}
        onClick={() => setActiveTab("edit")}
      >
        <span>⚙️</span>
      </div>

      {/* Messages icon */}
      <div style={iconStyle}>
        <span>💬</span>
      </div>

      {/* Users icon */}
      <div style={iconStyle}>
        <span>👥</span>
      </div>

      {/* Logout icon - at the bottom */}
      <div
        style={{
          ...iconStyle,
          marginTop: "auto",
        }}
        onClick={onLogout}
      >
        <span>↩️</span>
      </div>
    </div>
  );
}

export default Sidebar;
