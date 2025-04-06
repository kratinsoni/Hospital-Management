import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
  logoutDoctor,
  updateDoctorDetails,
} from "../controller/userController.js";

import {
    isAdminAuthenticated,
    isPatientAuthenticated,
    isDoctorAuthenticated,
  } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);

router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// only authenticated admin users can access the /admin/addnew endpoint.

//the middle ones are middleware after their completion only the nect and last function will be performed

router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

router.get("/doctors", getAllDoctors);

router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/doctor/me", isDoctorAuthenticated, getUserDetails);

router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor);
router.post(
  "/editdoctor/:doctorId",
  isDoctorAuthenticated,
  updateDoctorDetails
);




export default router;