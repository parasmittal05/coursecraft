const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const extraDetails = err.extraDetails || "An unexpected error occurred";
  
    // Log the error details to the console or a logging service
    console.error(`Error: ${message}`, {
      status,
      extraDetails,
      stack: err.stack, // Include stack trace for debugging
    });
  
    // Respond to the client
    res.status(status).json({ message, extraDetails });
  };
  
  module.exports = errorMiddleware;
  
