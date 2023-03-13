import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.button}>X</button>
      <NavLink to={`/detail/${id}`} className={styles.link}>
        <h2 className={styles.h2}>{name}</h2>
      </NavLink>
      <h2 className={styles.h2}>{species}</h2>
      <h2 className={styles.h2}>{gender}</h2>
      <img className={styles.img} src={image} alt="Imagen" />
    </div>
  );
}
