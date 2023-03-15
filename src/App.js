import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        // if (data.name) {
        //   setCharacters((oldChars) => [...oldChars, data]);
        // } else {
        //   window.alert("No hay personajes con ese ID");
        // }
        if(data.name){
          if(characters.find((char)=> char.id === data.id)){
            alert('El personaje ya esta añadido')
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    // style={{ padding: '25px' }}
    <div className="App">
      <Nav onSearch={onSearch} />
      <div>
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/detail/:detailId" element={<Detail/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
