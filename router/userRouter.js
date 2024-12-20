import express from "express";
import { addNewAdmin, addNewDoctor, deleteDoctor, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import {isAdminAuthenticated, isPatientAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

// patient registration
router.post("/patient/register", patientRegister);
// login
router.post("/login",login);
// add new admin
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);

// get all doctors
router.get("/doctors",getAllDoctors);
// get user details
router.get("/admin/get",isAdminAuthenticated,getUserDetails);

router.get("/patient/get",isPatientAuthenticated,getUserDetails);

// Admin logout
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);

// Patient logout
router.get("/patient/logout",isPatientAuthenticated,logoutPatient);

// Add New Doctor
router.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);

// delete Doctor
router.delete("/delete-doctor/:id",deleteDoctor);






export default router;