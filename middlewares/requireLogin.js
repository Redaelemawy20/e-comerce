module.exports = (req, res, next) => {
  console.log(req.user);
  if (!req.user) return res.status(401).send("You must log in");
  next();
};
