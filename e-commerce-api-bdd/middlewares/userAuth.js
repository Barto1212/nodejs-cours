const userAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === "user") {
    next();
  } else {
    res.sendStatus(401);
  }
};

export default userAuth;
