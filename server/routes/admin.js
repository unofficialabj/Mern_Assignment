//importing from the controller
import {adminDash, adminDash1, adminDash2} from '../controller/admin'

const express = require("express"); //server
const router = express.Router();

router.get("/admin-dash",adminDash)
router.get("/admin-dash2",adminDash1)
router.get("/admin-dash3",adminDash2)

module.exports = router;