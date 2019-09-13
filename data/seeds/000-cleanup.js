exports.seed = async function(knex) {
  try {
    await knex.raw("SET foreign_key_checks = 0;");
    await knex.truncate("Habit_Tracking");
    await knex.truncate("User_Habits");
    await knex.truncate("User_Categories");
    await knex.truncate("Users");
    await knex.truncate("Categories");
    await knex.raw("SET foreign_key_checks = 1;");
  } catch (err) {
    console.log(err);
  }
};
