import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  getDoctorAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isAdminOrDoctorAuthenticated,
  isDoctorAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put(
  "/update/:id",
  isAdminOrDoctorAuthenticated,
  updateAppointmentStatus
);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.get(
  "/getDoctorAppointments",
  isDoctorAuthenticated,
  getDoctorAppointments
);
export default router;
