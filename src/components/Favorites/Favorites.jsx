import { connect } from "react-redux";

function Favorites({ favorites }) {
  return (
    <div>
      {favorites.map((character) => {
        return (
            <div key={character.id}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
            </div>
        )
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
