const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const service = require("./send.service")

async function create(req, res) {
  const data = await service.create(req.body)
  res.json({ data })
}

module.exports = {
  create: asyncErrorBoundary(create),
}
