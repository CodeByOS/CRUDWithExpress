require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const app = express();

//* MiddleWare
app.use(bodyParser.json());

//* Define Route
const groupOneRoutes = require("./routes/groupOneRoutes");
app.use("/api/group-one", groupOneRoutes);


//* Start the server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`The server is running on Port ${PORT}`)
        })
    })
    .catch(err => console.log("Failed to run the server ", err));