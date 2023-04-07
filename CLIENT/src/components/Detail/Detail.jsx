import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Detail/Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  function stylesStatus(status) {
    if (status === "Alive") {
      return {color: 'green'};
    } else if (status === "Dead") {
      return {color: 'red'};
    } else {
      return {color: '#b7c2ce'};
    }
  }

  function stylesStatusBackground(status) {
    if (status === "Alive") {
      return styles.divAlive;
    } else if (status === "Dead") {
      return styles.divDead;
    } else {
      return styles.divUnknow;
    }
  }

  return (
    <div className={stylesStatusBackground(character.status)}>
      {/* <div className={styles.divButton}>

      </div> */}
      <div className={styles.divInfo}>
        <h1>{character.name}</h1>
        <h2 style={stylesStatus(character.status)}className={styles.h2Status}>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
      </div>
      <div>
        <img src={character.image} alt="Imagen" className={styles.img} />
      </div>
    </div>
  );
}
