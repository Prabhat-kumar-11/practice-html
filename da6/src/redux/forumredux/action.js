import axios from "axios";
import { GET_QUESTION, POST_QUESTION } from "./actiontypes";

export const postquestion = (ob) => (dispatch) => {
  return axios.post(`https://determined-gold-jaguar.cyclic.app/questions`, ob)
    .then((res) => {
      dispatch({ type: POST_QUESTION, payload: res.data });
    });
}

export const getquestion = (page) => (dispatch) => {
  axios.get(`https://determined-gold-jaguar.cyclic.app/questions?_limit=5&page=${page}`)
    .then((res) => {
      dispatch({ type: GET_QUESTION, payload: res.data });
    });
}

export const deletequestion = (id) => (dispatch) => {
  return axios.delete(`https://determined-gold-jaguar.cyclic.app/questions/${id}`)
    .then((res) => {
      dispatch(getquestion(1)); // Fetch updated data after deletion
    });
}
