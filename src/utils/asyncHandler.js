// This is simply a wrappar function

// This is using promises. Try-catch function is written below
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

export { asyncHandler };



// Async handler is a higher order function => Functions that can accept other functions as parameters or can return functions

// Short method to write (fn) => { () => { } }
// Can add async like (fn) => async () => { }
/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/