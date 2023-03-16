import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "";
  const password = "";

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
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

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    // style={{ padding: '25px' }}
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <div>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:detailId" element={<Detail />}></Route>
          <Route path="/" element={<Form login={login} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
