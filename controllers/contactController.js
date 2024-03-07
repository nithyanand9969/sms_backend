const db = require("../config/db");

const getContacts = async (req, res) => {
  try {
    const [data] = await db.query("select * from contact");
    if (!data.length) {
      return res.status(404).send({
        success: false,
        message: "No Data",
      });
    }
    res.status(200).send({
      success: true,
      message: "Data Found",
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
      success: true,
      message: "Contact Found",
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
      res.status(500).send({
        success: false,
        message: "Please Provide all details ",
      });
    }
    const data = await db.query(
      `insert into contact (name,email,number,message) values (?,?,?,?)`,
      [name, email, number, message]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "error in inseert ",
      });
    }
    res.status(201).send({
      success: true,
      message: "new Contact added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in Student Api",
    });
  }
};
module.exports = { getContacts, getContactByID, createContact };
