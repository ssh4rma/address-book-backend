const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();
const authRoutes = require("./routes/auth");

const contactRoutes = require("./routes/contactRoutes");

connectDb();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json()); //json middleware: which will parse the json data to JS object.

app.get("/", (req, res) => res.send("FundooNotes API is running")); //server get request for the root directory.

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes); //route middleware

app.use(errorHandler); //error middleware

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
