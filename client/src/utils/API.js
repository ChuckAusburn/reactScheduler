import axios from "axios";
import apikey from "./apikey";

// Export an object containing methods we'll use for accessing the Article.Ceo API
export default {
  searchArticle: function(query) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + apikey);
  },
  // searchArticle: function(articles) {
  //   return axios.get("https://api.nytimes.com/svc/search/v2/" + startYear + ".json?q=election&api-key=" + apikey);
  // },
  // searchArticle: function() {
  //   return axios.get("https://api.nytimes.com/svc/search/v2/" + endYear + ".json?q=election&api-key=" + apikey);
  // }
};