const knex = require("../db/connection")

function create(inquiry) {
  return knex("inquiries")
    .insert(inquiry)
    .returning("*")
    .then((createdRecords) => createdRecords[0])
}

module.exports = {
  create,
}
