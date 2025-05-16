const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("Unauthorized");
  }

  const token = header.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Invalid Token");
  }
};

module.exports = protect;
