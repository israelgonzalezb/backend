const express = require("express");
const userCategoriesDb = require("../user-categories/user-categories-model.js");

const router = express.Router();

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
    // const user = await db.<getUserMethod>(id);
    if (user) {
    } else {
    }
  } catch {}
}

module.exports = router;
