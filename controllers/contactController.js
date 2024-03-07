const db = require("../config/db");

const getContacts = async (req, res) => {
  try {
    const [data] = await db.query("SELECT * from contact");
    if (!data.length) {
      return res.status(404).send({
        success: false,
        message: "No Data",
      });
    }
    res.status(200).send({
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in API",
      error: error.message,
    });
  }
};

// Get by id

const getContactByID = async (req, res) => {
  try {
    const contactId = req.params.id;
    if (!contactId) {
      return res.status(400).send({
        success: false,
        message: "Please Provide the ID",
      });
    }

    const [data] = await db.query(`SELECT * FROM contact WHERE id = ?`, [
      contactId,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Record Found",
      });
    }
    res.status(200).send({
      contactDetails: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in API",
      error: error.message,
    });
  }
};
const createContact = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    if (!name || !email || !number || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details.",
      });
    }
    // Assuming db.query returns a Promise
    const data = await db.query(
      `INSERT INTO contact (name, email, number, message) VALUES (?, ?, ?, ?)`,
      [name, email, number, message]
    );
    if (!data) {
      return res.status(500).json({
        success: false,
        message: "Error in inserting data.",
      });
    }
    return res.status(201).json({
      success: true,
      message: "New contact added successfully.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in backend API.",
      error: error.message,
    });
  }
};

// module.exports = { createContact };

module.exports = { getContacts, getContactByID, createContact };
