class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

/* // Creating an instance of ApiResponse for a successful response
const successfulResponse = new ApiResponse(200, { user: { id: 1, name: "John" } });

// Creating an instance of ApiResponse for an error response
const errorResponse = new ApiResponse(404, null, "Resource not found");

// Accessing properties of the response instances
console.log(successfulResponse.statusCode); // Output: 200
console.log(successfulResponse.data); // Output: { user: { id: 1, name: "John" } }
console.log(successfulResponse.message); // Output: "Success"
console.log(successfulResponse.success); // Output: true

console.log(errorResponse.statusCode); // Output: 404
console.log(errorResponse.data); // Output: null
console.log(errorResponse.message); // Output: "Resource not found"
console.log(errorResponse.success); // Output: false
 */