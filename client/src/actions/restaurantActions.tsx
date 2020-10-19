import { Dispatch } from "redux";
import { GET_RESTAURANTS } from "./types";
import axios from "axios";

export const getRestaurants = () => (dispatch: Dispatch) => {
  axios.get("database").then((res) =>
    dispatch({
      type: GET_RESTAURANTS,
      payload: res.data,
    })
  );
};

type Actions = ReturnType<typeof getRestaurants>;
