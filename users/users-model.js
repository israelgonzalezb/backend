const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username");
}

// the destructured object here has given me issues in the past
// make sure this works!
function findBy(username) {
  return db("users").where({ username: username });
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user);

    return findById(id);
  } catch (err) {
    console.log(err);
  }
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
