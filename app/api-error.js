 class ApiError extends Error {
    constructor(statusCode, messge) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
 }
 module.exports = ApiError;