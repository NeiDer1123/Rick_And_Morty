import axios from "axios";

// ACTION | addFav
export const addCharacter = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character)
      .then(({ data }) => {
         return dispatch({
            type: 'ADD_CHARACTER',
            payload: data,
         });
      });
   };
};

// export function addCharacter(character){
//     return {
//         type: 'ADD_CHARACTER',
//         payload: character
//     }
// }

// ACTION | removeFav
export const deleteCharacter = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'DELETE_CHARACTER',
             payload: data,
       });
       });
    };
 };

// export function deleteCharacter(id){
//     return {
//         type: 'DELETE_CHARACTER',
//         payload: id
//     }
// }

export function filterCards(gender){
    return {
        type: 'FILTER',
        payload: gender
    }
}

export function orderCards(order){
    return {
        type: 'ORDER',
        payload: order
    }
}