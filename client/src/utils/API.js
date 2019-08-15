import axios from "axios";


export default {
  // Gets Episode Info from OMDB API
  getEpisode: function(info) {
    return axios.get("https://www.omdbapi.com/?t=the+simpsons&y=&season=" + info.userSeason + "&episode=" + info.userEpisode + "&plot=short&apikey=trilogy")
  }
}