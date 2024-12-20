import express from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router()
// post-appointment
router.post('/post-appointment',isPatientAuthenticated,postAppointment)
// router.post('/post-appointment',postAppointment)
// get-appointments
router.get('/get-all-appointment',isAdminAuthenticated,getAllAppointments)
// router.get('/get-all-appointment',getAllAppointments)
// update-appointment 
router.put('/update-appointment/:id',isAdminAuthenticated,updateAppointmentStatus)
// router.put('/update-appointment/:id',updateAppointmentStatus)
// delete-appointment
router.delete('/delete-appointment/:id',deleteAppointment)

export default router