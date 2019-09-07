exports.seed = function(knex) {
  return knex("Users").insert([
    {
      username: "test",
      password: "pass"
    },
    {
      username: "test2",
      password: "pass2"
    }
  ]);
};
