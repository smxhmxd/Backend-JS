class ApiError extends Error {
    // The Error class is given in Nodejs for handling errors
    // Here we are using it through Inheritance by extending the Error Class
    // Overriding the Constructor
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "" // Error Stack
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}