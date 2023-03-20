import { connect } from "react-redux";
import styles from "../Favorites/Favorite.module.css";
import { NavLink } from "react-router-dom";

function Favorites({ favorites }) {
  return (
    <div className={styles.container}>
      {favorites.map((character) => {
        return (
          <div key={character.id} className={styles.card}>
            <NavLink to={`/detail/${character.id}`} className={styles.link}>
            <img
              src={character.image}
              alt={character.name}
              className={styles.img}
            />
            </NavLink>
              <h2 className={styles.h2}>{character.name}</h2>
            <h2 className={styles.h2}>{character.species}</h2>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
