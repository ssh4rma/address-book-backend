const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

connectDb();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => res.send("FundooNotes API is running"));

app.use("/api/contacts", contactRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
