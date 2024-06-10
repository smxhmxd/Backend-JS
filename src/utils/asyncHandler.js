const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Wrap the requestHandler in a Promise and resolve it
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
            // If the Promise resolves successfully, do nothing
            // If the Promise rejects (throws an error), pass the error to the next middleware
    };
};


export { asyncHandler }

// The `asyncHandler` function simplifies error handling in asynchronous route handlers by wrapping them in a Promise
// and passing any errors to Express's error-handling Middleware.


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}

// Higher Order Function - Accept and return Function as parameter and result
// So we can make a function inside another function (func) => () => {}

// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }