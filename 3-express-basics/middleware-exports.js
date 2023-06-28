export const middleware = (req, res, next) => {
  console.log("Testing common middleware in all the routes");
  next();
};

export const middlewareOne = (req, res, next) => {
  console.log("Testing two middleware one the routes");
  next();
};
