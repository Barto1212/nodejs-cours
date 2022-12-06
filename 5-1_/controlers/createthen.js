import User from "../models/User.js";

const create = (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
    res.sendStatus(400);
    return;
  }
  if (typeof email !== "string" || typeof pwd !== "string") {
    res.sendStatus(400);
    return;
  }
  User.find({ email })
    .then((exists) => {
      // exists = [{email: frege}, {email: freg}]
      if (exists.length > 0) {
        res.send(403).send("Cet email est déjà pris");
      } else {
        const newUser = new User({ email, pwd });
        newUser
          .save()
          .then((savedUser) => {
            res.status(201).send(savedUser);
          })
          .catch((error) => {
            res.sendStatus(500);
            console.log(error);
          });
      }
    })
    .catch((errorUserFind) => {
      console.log(errorUserFind);
      res.sendStatus(500);
    });
};

export default create;
