const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        await mongoose.connect(MONGO_URI);
        console.log("DataBase is Connected..")
    } catch (error) {
        console.log("Failed to connect to Database..!", error);
        process.exit(1);
    }
}

module.exports = connectDB;