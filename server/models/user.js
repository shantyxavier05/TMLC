const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: { type: String },
  email: { type: String },
  otp: { type: String }
});

mongoose.model("users", movieSchema);