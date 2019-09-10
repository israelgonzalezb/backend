const router = require("express").Router();

const userCategoriesDb = require("../user-categories/user-categories-model.js");
const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const authRouter = require("../auth/auth-router.js");



// - 'GET api/users/': test authentication route for errors
router.get("/", restricted, (req, res) => {
  console.log("restricted users route working");
  res.send({message: "Restricted router running..."});
});

router.use("/",authRouter);
//router.use("/login",authRouter.login);

// - `GET /api/users/:id/categories`: all categories (with weights) that a user has created
router.get("/:id/categories", validateUserId, async (req, res) => {
  const categoryList = await userCategoriesDb.getByUserId(req.user.id);
  if (categoryList) {
    res.status(200).json(categoryList);
  } else {
    next({
      status: 500,
      message: "The category list could not be retrieved."
    });
  }
});

async function validateUserId(req, res, next) {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status: 404, message: "User ID not found" });
    }
  } catch {
    next({ status: 500, message: "Error accessing User ID" });
  }
}

module.exports = router;
