"use client";

import { useState } from "react";

function EditDoctorForm({ doctor, updateDoctorDetails }) {
  const [formData, setFormData] = useState({
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    nic: doctor.nic,
    email: doctor.email,
    doctorDepartment: doctor.doctorDepartment,
    phone: doctor.phone,
    password: "",
    confirmPassword: "",
  });

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (formData.password && formData.password !== formData.confirmPassword) {
      setMessage({
        text: "Passwords do not match",
        type: "error",
      });
      return;
    }

    // Create updated doctor object (excluding password fields)
    const { ...updatedDoctor } = formData;

    // Update doctor details
    updateDoctorDetails(updatedDoctor);

    setMessage({
      text: "Profile updated successfully",
      type: "success",
    });

    // Clear password fields
    setFormData((prev) => ({
      ...prev,
      password: "",
      confirmPassword: "",
    }));
  };

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
        Edit Doctor Profile
      </h2>

      {message.text && (
        <div
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            backgroundColor: message.type === "error" ? "#fee2e2" : "#dcfce7",
            color: message.type === "error" ? "#b91c1c" : "#166534",
          }}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              firstName
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
              required
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              lastName
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <select
            name="doctorDepartment"
            value={formData.doctorDepartment}
            onChange={handleChange}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              width: "100%",
              outline: "none",
              backgroundColor: "#fff",
              color: "#333",
              marginTop: "25px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              transition: "border-color 0.2s ease-in-out",
            }}
          >
            {/**Using a map //////////*/}
            {departmentsArray.map((depart, index) => {
              return (
                <option value={depart} key={index}>
                  {" "}
                  {/* all departments would be formed as options in a dropdown menu */}
                  {depart}
                </option>
              );
            })}
          </select>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              New Password (leave blank to keep current)
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: "12px 24px",
            backgroundColor: "#4338ca",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default EditDoctorForm;
