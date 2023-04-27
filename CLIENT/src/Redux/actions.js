import axios from "axios";

// ACTION | addFav
export const addCharacter = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
     return async (dispatch) => {
       const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_CHARACTER",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

// ACTION | removeFav
export const deleteCharacter = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  try {
     return async (dispatch) => {
       const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "DELETE_CHARACTER",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export function filterCards(gender) {
  return {
    type: "FILTER",
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: "ORDER",
    payload: order,
  };
}
