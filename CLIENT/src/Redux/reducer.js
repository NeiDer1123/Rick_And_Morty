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
        allCharacters: [...state.allCharacters, action.payload],
      };

    case "DELETE_CHARACTER":
      const filterDelete = state.allCharacters.filter((e) => e.id !== action.payload)
      return {
        ...state,
        myFavorites: filterDelete,
        allCharacters: filterDelete
      };

    case "FILTER":
      const genderFilter = state.allCharacters.filter(
        (e) => e.gender === action.payload
      );

      return {
        ...state,
        myFavorites: genderFilter,
      };

    case "ORDER":
      const filterByOrder = [...state.allCharacters].sort((a,b)=>{
        if(a.id > b.id){
          return action.payload === "Ascendente" ? 1 : -1
        } else if(a.id < b.id){
          return action.payload === "Descentende" ? 1 : -1
        } else {
          return 0;
        }
      })
      return {
        ...state,
        myFavorites: filterByOrder
          // action.payload === "Ascendente"
          //   ? state.allCharacters.sort((a, b) => a.id - b.id)
          //   : state.allCharacters.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
