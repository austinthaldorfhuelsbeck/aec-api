const path = require("path")
require("dotenv").config()
const { DATABASE_URL } = process.env
console.log(DATABASE_URL)

module.exports = {
  development: {
    client: "postgresql",
    connection:
      "postgres://irsadmqz:BV97_ZlARjbZDzVV7_D8o_BJhGmIiaO1@kashin.db.elephantsql.com:5432/irsadmqz",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
}
