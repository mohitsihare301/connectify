import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";


/* we are sending  all of the information from the login form to the backend */ 
router.post("/signin", signin);
router.post("/signup", signup);

export default router;