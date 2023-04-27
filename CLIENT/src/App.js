import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  // const username = "";
  // const password = "";

  async function onSearch(character) {
    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${character}`)
        if (characters.find((char) => char.id === data.id)) {
          alert("El personaje ya esta añadido");
        } else {
          setCharacters([...characters, data]);
        }
    } catch (error) {
      alert("No hay personajes con ese ID");
    }
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  // function login(userData) {
  //   if (userData.password === password && userData.username === username) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  async function login(userData) {
    try {
      const { username, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${username}&password=${password}`)
      const { access } = data;
       setAccess(data);
       access && navigate('/home');
    } catch (error) {
      alert(error.message)
    }
 }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    // style={{ padding: '25px' }}
    <div className="App">
      {/* {location.pathname !== "/" && <Nav onSearch={onSearch} />} */}
      {location.pathname === "/" ? (
        <div className="div">
          <Form login={login} />
          <div>
            <img 
              className="img"
              src="http://images6.fanpop.com/image/photos/39500000/Rick-and-Morty-rick-and-morty-39568272-1041-389.png"
              alt="imagen"
            />
          </div>
        </div>
      ) : (
        <Nav onSearch={onSearch} />
      )}
      <div>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:detailId" element={<Detail />}></Route>
          {/* <Route path="/" element={<Form login={login} className="Div"/>}></Route> */}
          <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

// nashd,masnldka

export default App;
