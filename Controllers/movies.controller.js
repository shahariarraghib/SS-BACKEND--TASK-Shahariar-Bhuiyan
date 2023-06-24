const {
  moviesService,
  getMoviesService,
  patchMoviesInfoByIdService,
  deleteMoviesInfoServiceById,
} = require("../Services/movies");

exports.moviesInfo = async (req, res) => {
  try {
    const result = await moviesService(req.body, req.user?.role);
    res.status(200).json({
      status: "success",
      message: "Data insert successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

exports.getMoviesInfo = async (req, res) => {
  try {
    const result = await getMoviesService();

    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.patchMoviesInfoById = async (req, res, next) => {
  try {
    console.log(req.user?.email);
    const { id } = req.params;
    const result = await patchMoviesInfoByIdService(
      id,
      req.body,
      req.user?.role
    );
    res.status(200).json({
      status: "success",
      message: "Data update successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't update ",
      error: error.message,
      et,
    });
  }
};

exports.deleteMoviesInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteMoviesInfoServiceById(id, req.user?.role);
    res.status(200).json({
      status: "success",
      message: "Data delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't delete",
      error: error.message,
    });
  }
};
