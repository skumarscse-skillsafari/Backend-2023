import User from "../models/userModel.js";

// http://localhost:5000/users/add
export const createUser = (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username })
    .save()
    .then(() =>
      res
        .status(201)
        .json({ success: true, message: "User created successfully" })
    )
    .catch((err) => console.log(err));
};

// http://localhost:5000/users
export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json({ success: true, response: users }))
    .catch((err) => console.log(err));
};
