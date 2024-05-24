const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
  // id:{
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
      type: String,
        required: true
    }
})

module.exports =  mongoose.model("song", songSchema)
