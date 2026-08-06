import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT Error:", err);

    return res.status(401).json({
      message: err.message,
    });
  }
};
export default adminAuth;
