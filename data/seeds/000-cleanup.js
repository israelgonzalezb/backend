exports.seed = async function(knex) {
  try {
    await knex.truncate("Users");
    await knex.truncate("Categories");
    await knex.truncate("User_Categories");
    await knex.truncate("User_Habits");
    await knex.truncate("Habit_Tracking");
  } catch (err) {
    console.log(err);
  }
};
a;
