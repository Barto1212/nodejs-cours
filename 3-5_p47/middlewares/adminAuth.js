const adminAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === "admin") {
    next();
  } else {
    res.sendStatus(401);
  }
};

export default adminAuth;
