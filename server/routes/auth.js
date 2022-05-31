//importing the controller into the routes
import {register, register1, register2} from '../controller/auth'

const express = require("express"); //import server 
const router = express.Router(); 

router.post("/register",register)
router.post("/register1",register1)
router.post("/register2",register2)

module.exports = router;