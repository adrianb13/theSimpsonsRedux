import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY;

let API = {
  // Gets Episode Info from OMDB API
  getEpisode: function(info) {
    return axios.get("https://www.omdbapi.com/?t=the+simpsons&y=&season=" + info.userSeason + "&episode=" + info.userEpisode + "&plot=short&apikey=" + apikey)
  }
}

export {API};