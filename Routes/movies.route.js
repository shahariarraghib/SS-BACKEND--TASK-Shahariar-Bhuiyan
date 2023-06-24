const express = require("express");
const { route } = require("../app");
const moviesInfoController = require("../Controllers/movies.controller");
const veryfyToken = require("../Middleeare/veryfyToken");
const router = express.Router();

router
  .route("/")
  .get(moviesInfoController.getMoviesInfo)
  .post(veryfyToken, moviesInfoController.moviesInfo);

router
  .route("/:id")

  .patch(veryfyToken, moviesInfoController.patchMoviesInfoById)
  .delete(veryfyToken, moviesInfoController.deleteMoviesInfoById);

module.exports = router;
