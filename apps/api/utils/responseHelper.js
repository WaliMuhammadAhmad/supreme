// Helper functions for API responses

const successResponse = (res, data, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const errorResponse = (res, message = "Error occurred", statusCode = 400) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const notFoundResponse = (res, message = "Resource not found") => {
  return res.status(404).json({
    success: false,
    message,
  });
};

const unauthorizedResponse = (res, message = "Unauthorized access") => {
  return res.status(401).json({
    success: false,
    message,
  });
};

const serverErrorResponse = (res, message = "Internal server error") => {
  return res.status(500).json({
    success: false,
    message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
  notFoundResponse,
  unauthorizedResponse,
  serverErrorResponse,
};

