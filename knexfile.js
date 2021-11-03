const path = require("path")
require("dotenv").config()
const { DATABASE_URL } = process.env
console.log(DATABASE_URL)

module.exports = {
  development: {
    client: "postgresql",
    connection:
      "postgres://tvfhobcu:clZojJOZMSue5OtI_h9txf9p5JsHEfhm@fanny.db.elephantsql.com/tvfhobcu",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
}
