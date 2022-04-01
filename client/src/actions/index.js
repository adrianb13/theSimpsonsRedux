import {API} from "../utils/API";
import * as types from "./types";
import family from "../assets/data/simpsons.json";
import missing from "../assets/data/missing.json";
import seasons from "../assets/data/show.json";

//Loads data from Simpsons JSON
export function loadSimpsons() {
  return {type: types.LOAD_SIMPSONS_SUCCESS, family}
};

//Finds Episode info from OMDB API or Missing Episode JSON
export function findEpisode(info){
  return function(dispatch) {
    return API.getEpisode(info)
    .then(episode => {
      console.log(episode)
      //If Episode is available on OMDB API
      if (!episode.data.Error && episode.data.Plot !== "N/A") {
        dispatch(getEpisodeSuccess(episode.data));
      //If Episode is listed in Missing JSON
      } else {
        dispatch(findMissing(info));
      }
    })
    .catch(err => console.log(err));
  }
};

export function getEpisodeSuccess(episode) {
  return {type: types.GET_EPISODE_SUCCESS, episode}
};

//Loads data from Missing Episode JSON and checks to see if any match the user request.
export function findMissing(info) {
  let sFilter = missing.filter(season => season.season === info.userSeason)
  let eFilter = sFilter.filter(episode => episode.episode === info.userEpisode)
  let episode1 = eFilter[0];
  return {type: types.GET_MISSING_SUCCESS, episode1}
};

//Loads data from Seasons/Episode Listing JSON
export function getSeasons() {
  return {type: types.GET_SEASON_SUCCESS, seasons}
}