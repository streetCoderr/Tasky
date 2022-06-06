
class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode;
  }
}

const createCustomApiErr = (msg, code) => new CustomApiError(msg, code);
module.exports = {CustomApiError, createCustomApiErr};