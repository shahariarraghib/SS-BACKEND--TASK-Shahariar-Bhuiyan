const movieInfo = require("../Models/movies");

exports.moviesService = async (movie, requestRole) => {
  if (requestRole === "admin") {
    const result = await movieInfo.create(movie);
    return result;
  } else {
    return "access denied";
  }
};

exports.getMoviesService = async (query) => {
  const result = await movieInfo.find(query);
  return result;
};

exports.patchMoviesInfoByIdService = async (
  movieId,
  patchData,
  requestRole
) => {
  // console.log(movieId);
  if (requestRole === "admin") {
    const result = await movieInfo.updateOne(
      { _id: movieId },
      { $set: patchData },
      { runValidators: true }
    );
    return result;
  } else {
    return "access denied";
  }
};

exports.deleteMoviesInfoServiceById = async (id, requestRole) => {
  if (requestRole === "admin") {
    const result = await movieInfo.deleteOne({ _id: id });
    return result;
  } else {
    return "access denied";
  }
};
