exports.seed = async function(knex) {
  try {
    await knex.schema.raw(
      "TRUNCATE TABLE Habit_Tracking, User_Habits, User_Categories, Users, Categories CASCADE"
    );
  } catch (err) {
    console.log(err);
  }
};
