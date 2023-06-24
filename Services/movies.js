const movieInfo = require("../Models/movies");
const tvShowsInfo = require("../Models/tvShows");

exports.moviesService = async (movie, requestRole, category) => {
  console.log(category);

  if (requestRole === "admin") {
    if (category === "movies") {
      const result = await movieInfo.create(movie);
      return result;
    }
    if (category === "tvshows") {
      const result = await tvShowsInfo.create(movie);
      return result;
    } else {
      return "request not found";
    }
  } else {
    return "access denied";
  }
};

exports.getMoviesService = async (query, category) => {
  console.log(category);
  if (category === "movies") {
    const result = await movieInfo.find(query);
    return result;
  }
  if (category === "tvshows") {
    const result = await tvShowsInfo.find(query);
    return result;
  } else {
    return "request not found";
  }
};

exports.getMoviesServiceById = async (id, category) => {
  if (category === "movies") {
    const result = await movieInfo.findById(id);
    return result;
  }
  if (category === "tvshows") {
    const result = await tvShowsInfo.findById(id);
    return result;
  } else {
    return "request not found";
  }
};

exports.patchMoviesInfoByIdService = async (
  movieId,
  patchData,
  requestRole,
  category
) => {
  console.log(category);
  if (requestRole === "admin") {
    if (category === "movies") {
      const result = await movieInfo.updateOne(
        { _id: movieId },
        { $set: patchData },
        { runValidators: true }
      );
      return result;
    }
    if (category === "tvshows") {
      const result = await tvShowsInfo.updateOne(
        { _id: movieId },
        { $set: patchData },
        { runValidators: true }
      );
      return result;
    } else {
      return "request not found";
    }
  } else {
    return "access denied";
  }
};

exports.deleteMoviesInfoServiceById = async (id, requestRole, category) => {
  if (requestRole === "admin") {
    if (category === "movies") {
      const result = await movieInfo.deleteOne({ _id: id });
      return result;
    }
    if (category === "tvshows") {
      const result = await tvShowsInfo.deleteOne({ _id: id });
      return result;
    } else {
      return "request not found";
    }
  } else {
    return "access denied";
  }
};
