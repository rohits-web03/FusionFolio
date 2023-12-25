class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
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

/* // Importing the ApiError class
import { ApiError } from './path/to/ApiError.js';

// Creating an instance of ApiError
const error = new ApiError(404, "Resource not found", [{ field: 'id', message: 'Invalid ID' }]);

// Accessing properties of the error instance
console.log(error.statusCode); // Output: 404
console.log(error.message); // Output: Resource not found
console.log(error.errors); // Output: [{ field: 'id', message: 'Invalid ID' }]
console.log(error.stack); // Output: (Depends on how the error was instantiated)
 */