const db = require("../data/dbConfig.js");

module.exports = {
  getAll: function() {
    return db("User_Habits");
  },
  getByUserId: function(user_id) {
    return db("User_Habits")
      .select(
        "id",
        "category_id",
        "name",
        "description",
        "daily_goal_amount",
        "weight"
      )
      .where("user_id", user_id);
  },
  getById: function(id) {
    return db("User_Habits")
      .where("id", id)
      .first();
  },
  insert: function(user_habit) {
    return db("User_Habits")
      .insert(user_habit)
      .then(([id]) => this.findById(id));
  },
  update: function(updated_user_habit, id) {
    return db("User_Habits")
      .where("id", id)
      .update(updated_user_habit)
      .then(count => (count > 0 ? this.findById(id) : null));
  },
  remove: function(id) {
    return db("User_Habits")
      .where("id", id)
      .del();
  }
};
