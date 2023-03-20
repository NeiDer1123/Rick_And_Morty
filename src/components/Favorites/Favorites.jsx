import { connect } from "react-redux";
import styles from "../Favorites/Favorite.module.css";
import { NavLink } from "react-router-dom";

function Favorites({ favorites }) {
  return (
    <div className={styles.container}>
      {favorites.map((character) => {
        return (
          <div key={character.id} className={styles.card}>
            {/* <h2 className={styles.h2}>{character.name}</h2> */}
            <NavLink to={`/detail/${character.id}`} className={styles.link}>
              <h2 className={styles.h2}>{character.name}</h2>
            </NavLink>
            <h2 className={styles.h2}>{character.species}</h2>
            <img
              src={character.image}
              alt={character.name}
              className={styles.img}
            />
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
