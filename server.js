const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysqlPool = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/contact", require("./routes/contactRoutes"));
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Server is running</h1>");
});

const PORT = process.env.PORT || 8656;
mysqlPool
  .query("SELECT 1")
  .then(() => {
    console.log(`MY sql Connected  `);
    app.listen(PORT, () => {
      console.log(`server is running ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
