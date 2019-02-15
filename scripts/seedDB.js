const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the Events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactScheduler"
);

const eventSeed = [
  {
    title: "Sample Event",
    img: "https://i.dell.com/sites/imagecontent/metadata/PublishingImages/Services2.jpg",
    summery: "A seeded event for testing, i will now start wrighting nonsense incluthing but not limited to this and those. how about a healthy dose of these?",
    date: new Date(Date.now())  },
  {
    title: "Sample Event",
    img: "https://i.dell.com/sites/imagecontent/metadata/PublishingImages/Services2.jpg",
    summery: "A seeded event for testing, i will now start wrighting nonsense incluthing but not limited to this and those. how about a healthy dose of these?",
    date: new Date(Date.now())  
  },
  {
    title: "Sample Event",
    img: "https://i.dell.com/sites/imagecontent/metadata/PublishingImages/Services2.jpg",
    summery: "A seeded event for testing, i will now start wrighting nonsense incluthing but not limited to this and those. how about a healthy dose of these?",
    date: new Date(Date.now())  
  },
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " Events inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
