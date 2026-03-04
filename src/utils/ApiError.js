// This is a standard format of error in NodeJS APIs

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""  // error stack
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null  // Check in node documentation, what is data
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}