let myFavorites = [];

function postFav(req, res) {
  // const { character } = req.body;
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const filterFav = myFavorites.filter((favorite) => {
    favorite.id !== id;
  });
  res.status(200).json(filterFav);
}

module.exports = {
  postFav,
  deleteFav,
};
