import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div>
      <nav className={styles.nav}>
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
        </div>
          <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}
