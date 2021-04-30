const knex = require("../db/connection")

function list() {
  return knex("couples").select("*")
}

module.exports = {
  list,
}
