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
    // Deletes the book with the given id
    deleteEvent: function(id) {
      return axios.delete("/api/events/" + id);
    },

};