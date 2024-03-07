const express = require("express");
const {
  getContacts,
  getContactByID,createContact
} = require("../controllers/contactController");
const router = express.Router();

router.get("/getlist", getContacts);
router.get("/getlist/:id", getContactByID);
router.post("/create",createContact);

module.exports = router;
