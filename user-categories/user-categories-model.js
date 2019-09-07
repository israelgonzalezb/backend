const db = require("../data/dbConfig.js");

module.exports = {
  getAll: function() {
    return db("User_Categories");
  },
  getByUserId: function(user_id) {
    return db("User_Categories")
      .select("id", "category_id", "weight")
      .where("user_id", user_id);
  },
  getById: function(id) {
    return db("User_Categories")
      .where("id", id)
      .first();
  },
  insert: function(user_category) {
    return db("User_Categories")
      .insert(user_category)
      .then(([id]) => this.findById(id));
  },
  update: function(updated_user_category, id) {
    return db("User_Categories")
      .where("id", id)
      .update(updated_user_category)
      .then(count => (count > 0 ? this.findById(id) : null));
  },
  remove: function(id) {
    return db("User_Categories")
      .where("id", id)
      .del();
  }
};
