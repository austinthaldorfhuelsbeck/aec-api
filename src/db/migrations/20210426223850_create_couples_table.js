exports.up = function (knex) {
  return knex.schema.createTable("couples", (table) => {
    table.increments("couple_id").primary()
    table.string("url")
    table.string("name")
    table.string("image_url")
    table.string("video_url")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("couples")
}
