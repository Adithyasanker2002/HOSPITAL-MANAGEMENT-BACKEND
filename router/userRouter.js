import express from "express";
import { addNewAdmin, addNewDoctor, deleteDoctor, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import {isAdminAuthenticated, isPatientAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

// patient registration
router.post("/patient/register", patientRegister);
// login
router.post("/login",login);
// add new admin
// router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.post("/admin/addnew",addNewAdmin);
// get all doctors
router.get("/doctors",getAllDoctors);
// get user details
// router.get("/admin/get",isAdminAuthenticated,getUserDetails);
router.get("/admin/get",getUserDetails);
// router.get("/patient/get",isPatientAuthenticated,getUserDetails);
router.get("/patient/get",getUserDetails);
// Admin logout
// router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
router.get("/admin/logout",logoutAdmin);
// Patient logout
// router.get("/patient/logout",isPatientAuthenticated,logoutPatient);
router.get("/patient/logout",logoutPatient);
// Add New Doctor
// router.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);
router.post("/doctor/addnew",addNewDoctor);
// delete Doctor
router.delete("/delete-doctor/:id",deleteDoctor);






export default router;