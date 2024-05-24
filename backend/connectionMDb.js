const mongoose = require('mongoose');

const connectionMDb= async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoDbMusic");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectionMDb;
