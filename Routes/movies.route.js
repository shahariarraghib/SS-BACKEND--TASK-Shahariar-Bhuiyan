const express = require("express");
const { route } = require("../app");
const moviesInfoController = require("../Controllers/movies.controller");
const veryfyToken = require("../Middleeare/veryfyToken");
const router = express.Router();

router
  .route("/:category")
  .get(moviesInfoController.getMoviesInfo)
  .post(veryfyToken, moviesInfoController.moviesInfo);

router
  .route("/:category/:id")

  .get(moviesInfoController.getMoviesInfoById)
  .patch(veryfyToken, moviesInfoController.patchMoviesInfoById)
  .delete(veryfyToken, moviesInfoController.deleteMoviesInfoById);

module.exports = router;
