import axios from "axios";

//action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

//action creator
export const fetchCharacter = () => dispatch => {
  //action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch sucess or error action
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
        console.log(res.data)
     dispatch({ type: FETCH_SUCCESS, payload: res.data.results})
    })
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};