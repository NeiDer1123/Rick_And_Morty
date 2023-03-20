import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div>
      <nav className={styles.nav}>
        <img
          className={styles.img}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/500px-Rick_and_Morty.svg.png"
          alt="imagen"
        />
        <div className={styles.div}>
          <Link to="/home">
            <div>
              <button className={styles.button}>Home</button>
            </div>
          </Link>
          <Link to="/about">
            <div>
              <button className={styles.button}>About</button>
            </div>
          </Link>
          <Link to="/favorites">
            <div>
              <button className={styles.button}>Favorites</button>
            </div>
          </Link>
        </div>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}
