const db = require("../data/dbConfig.js");

module.exports = {
  getAll: function() {
    return db("Habit_Tracking");
  },
  getByUserId: function(user_id) {
    return db("Habit_Tracking as ht")
      .join("User_Habits as uh", "uh.id", "ht.user_habit_id")
      .select(
        "ht.id",
        "ht.user_habit_id",
        "uh.name",
        "uh.description",
        "uh.daily_goal_amount",
        "ht.done_on",
        "ht.quantity"
      )
      .where("uh.user_id", user_id);
  },
  getById: function(id) {
    return db("Habit_Tracking")
      .where("id", id)
      .first();
  },
  insert: function(habit_done) {
    return db("Habit_Tracking")
      .insert(habit_done)
      .then(([id]) => this.findById(id));
  },
  update: function(updated_habit_done, id) {
    return db("Habit_Tracking")
      .where("id", id)
      .update(updated_habit_done)
      .then(count => (count > 0 ? this.findById(id) : null));
  },
  remove: function(id) {
    return db("Habit_Tracking")
      .where("id", id)
      .del();
  }
};
