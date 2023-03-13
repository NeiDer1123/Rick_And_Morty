import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  function handleInputChange(e) {
    setCharacter(e.target.value);
  }
  return (
    <div className={styles.div}>
      <input type="search" onChange={handleInputChange} className={styles.input}/>
      <button className={styles.button} onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}
