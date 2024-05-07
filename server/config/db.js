const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGO_URI ||
      "mongodb+srv://nimatmmg3:<password>@banking.m83kjiq.mongodb.net/?retryWrites=true&w=majority&appName=Banking"
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
