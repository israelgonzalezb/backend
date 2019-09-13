exports.seed = async function(knex) {
  try {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  } catch (err) {
    console.log(err);
  }
};
