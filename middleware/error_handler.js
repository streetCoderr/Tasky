const {CustomApiError} = require('../errors/custom_api_error');
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({msg: err.message});
  }
  return res.status(500).json({msg: "Something went wrong. Try again later."});
}

module.exports = errorHandler;