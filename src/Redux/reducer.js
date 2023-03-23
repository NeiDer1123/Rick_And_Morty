const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.myFavorites],
      };

    case "DELETE_CHARACTER":
      return {
        ...state,
        myFavorites: state.myFavorites.filter((e) => e.id !== action.payload),
      };

    case "FILTER":
      // const gender = [...state.allCharacters];
      const {allCharacters} = state
      const genderFilter = allCharacters.filter((e) => e.gender === action.payload);

      return {
        ...allCharacters,
        myFavorites: genderFilter,
      };

    case "ORDER":
      // const characters = [...state.allCharacters.id];
      return {
        ...state,
        myFavorites: 
          action.payload === "Ascendente" ?
          allCharacters.sort((a, b)=> a.id - b.id) :
          allCharacters.sort((a, b)=> b.id - a.id)
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
