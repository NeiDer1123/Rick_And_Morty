import { connect, useDispatch } from "react-redux";
import styles from "../Favorites/Favorite.module.css";
import { NavLink } from "react-router-dom";
import { orderCards, filterCards } from "../../Redux/actions";

function Favorites({ favorites }) {
  const dispatch = useDispatch();

  // function handlerOrder(event) {
  //   dispatch(orderCards(event.target.value));
  // }

  // function handlerFilter(event) {
  //   dispatch(filterCards(event.target.value));
  // }

  return (
    <div className={styles.container}>
      <div>
        <select name="Order" onChange={(e)=> dispatch(orderCards(e.target.value))}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="Filter" onChange={(e)=> dispatch(filterCards(e.target.value))}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
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
