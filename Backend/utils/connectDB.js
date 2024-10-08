const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://wzb0615:P1Ly506I3WukVK42@ai-generator.ku0z6.mongodb.net/ai-generator?retryWrites=true&w=majority&appName=AI-Generator"
    );

    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

