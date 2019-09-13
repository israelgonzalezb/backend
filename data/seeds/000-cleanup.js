exports.seed = async function(knex) {
  try {
    await knex.schema.raw(
      "TRUNCATE TABLE Habit_Tracking RESTART IDENTITY CASCADE"
    );
    await knex.schema.raw(
      "TRUNCATE TABLE User_Habits RESTART IDENTITY CASCADE"
    );
    await knex.schema.raw(
      "TRUNCATE TABLE User_Categories RESTART IDENTITY CASCADE"
    );
    await knex.schema.raw("TRUNCATE TABLE Users RESTART IDENTITY CASCADE");
    await knex.schema.raw("TRUNCATE TABLE Categories RESTART IDENTITY CASCADE");
    // await knex.truncate("Habit_Tracking");
    // await knex.truncate("User_Habits");
    // await knex.truncate("User_Categories");
    // await knex.truncate("Users");
    // await knex.truncate("Categories");
  } catch (err) {
    console.log(err);
  }
};
