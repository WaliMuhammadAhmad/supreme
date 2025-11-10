const User = require("../models/User");

// Sign in
exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Email not found!" });
    }

    if (user.password === password) {
      return res.status(200).json({
        success: true,
        message: "Sign in successful",
        user: user,
      });
    }

    return res
      .status(401)
      .json({ success: false, message: "Password not matched!" });
  } catch (error) {
    console.error("Sign in error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

