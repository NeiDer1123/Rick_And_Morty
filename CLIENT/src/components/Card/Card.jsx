import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCharacter, deleteCharacter } from "../../Redux/actions";
import styles from "./Card.module.css";

function Card({
  name,
  species,
  gender,
  image,
  onClose,
  id,
  addCharacter,
  deleteCharacter,
  allCharacters,
}) {
  const [isFav, setIsFav] = useState(false);

  // console.log(myFavorites);
  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters, id]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      deleteCharacter(id);
    } else {
      setIsFav(true);
      addCharacter({ name, species, gender, image, onClose, id });
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.divButtons}>
        {isFav ? (
          <button onClick={handleFavorite} className={styles.favorites}>❤️</button>
        ) : (
          <button onClick={handleFavorite} className={styles.favorites}>🤍</button>
        )}
        <button onClick={onClose} className={styles.button}>
          X
        </button>
      </div>
      <NavLink to={`/detail/${id}`} className={styles.link}>
        <h2 className={styles.h2}>{name}</h2>
      </NavLink>
      <h2 className={styles.h2}>{species}</h2>
      <h2 className={styles.h2}>{gender}</h2>
      <img className={styles.img} src={image} alt="Imagen" />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addCharacter: (char) => dispatch(addCharacter(char)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
}

function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
