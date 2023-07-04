export const getUser = (req, res) => {
  res.status(200).send("<h1>GET SINGLE USER REQUEST RESPONSE</h1>");
};

export const getUsers = (req, res) => {
  res.status(200).send("<h1>GET ALL USERS REQUEST RESPONSE</h1>");
};

export const createUser = (req, res) => {
  res.status(200).send("<h1>CREATE USER REQUEST RESPONSE</h1>");
};

export const updateUser = (req, res) => {
  res.status(200).send("<h1>UPDATE USER REQUEST RESPONSE</h1>");
};

export const deleteUser = (req, res) => {
  res.status(200).send("<h1>DELETE USER REQUEST RESPONSE</h1>");
};
