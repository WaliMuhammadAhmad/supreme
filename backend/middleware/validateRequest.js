// Request validation middleware
// Add your validation logic here using libraries like express-validator or joi

const validateRequest = (schema) => {
  return (req, res, next) => {
    // Implement validation logic based on your preferred validation library
    // Example: const { error } = schema.validate(req.body);
    // if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    next();
  };
};

module.exports = validateRequest;

