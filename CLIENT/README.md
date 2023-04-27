# FUNCION onSearch version PROMESAS

```JS
  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        // if (data.name) {
        //   setCharacters((oldChars) => [...oldChars, data]);
        // } else {
        //   window.alert("No hay personajes con ese ID");
        // }
        if (data.name) {
          if (characters.find((char) => char.id === data.id)) {
            alert("El personaje ya esta añadido");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
```

# FUNCION login version PROMESAS

```JS
  function login(userData) {
    const { username, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }
```

# FUNCION addCharacter version PROMESAS con EXPRESS y sin EXPRESS

```JS
// CON EXPRESS
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

// SIN EXPRESS
export function addCharacter(character){
    return {
        type: 'ADD_CHARACTER',
        payload: character
    }
}
```

# FUNCION deleteCharacter version PROMESAS con EXPRESS y sin EXPRESS

```js
// ACTION | removeFav
export const deleteCharacter = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "DELETE_CHARACTER",
        payload: data,
      });
    });
  };

  export function deleteCharacter(id) {
    return {
      type: "DELETE_CHARACTER",
      payload: id,
    };
  }
};
```
