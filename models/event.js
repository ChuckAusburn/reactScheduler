const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  img: String,
  summery: String,
  date: String
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
