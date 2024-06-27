
import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero                 // hero and appointment form r imported
        title={"Schedule Your Appointment | Sanjeevani Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>          
    </>
  );
};

export default Appointment;