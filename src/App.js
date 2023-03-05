import './App.css'
import Cards from './components/Cards/Cards.jsx'
// import characters from './data.js'
import Nav from "./components/Nav/Nav"
import { useState } from 'react'

function App () {

  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function onClose(id) {
  setCharacters(characters.filter((character) => character.id !== id));
}

  return (
    // style={{ padding: '25px' }}
    <div className='App' > 
      <div>
        <Nav onSearch={onSearch}/> 
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
