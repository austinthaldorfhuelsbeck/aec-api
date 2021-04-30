exports.up = function (knex) {
  return knex.schema.createTable("inquiries", (table) => {
    table.increments("inquiry_id").primary()
    table.string("clientName")
    table.string("partnerName")
    table.string("email")
    table.string("phoneNumber")
    table.string("weddingDate")
    table.string("venue")
    table.string("referral")
    table.string("additionalInfo")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("inquiries")
}
