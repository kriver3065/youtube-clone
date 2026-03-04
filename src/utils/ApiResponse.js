class ApiResponse {
    constructor(statusCode, data, message = "Success"){ // If sending response then Success in most cases
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 // Greater than 400 = error
    }
}