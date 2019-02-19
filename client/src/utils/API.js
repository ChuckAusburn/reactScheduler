import axios from "axios";

// Export an object containing the Events API
export default {
    // Gets all events
    getEvents: function() {
      return axios.get("/api/events");
    },
      // Gets the event with the given id
    getEvent: function(id) {
    return axios.get("/api/events/" + id);
    },
    // Saves a new events event to the database
    saveEvent: function (eventData) {
      return axios.post("/api/events" + eventData);
    }

};