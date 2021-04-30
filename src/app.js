// DEPENDENCIES
if (process.env.USER) require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
// ROUTES
const couplesRouter = require("./couples/couples.router")
const sendRouter = require("./send/send.router")
// ERRORS
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

app.use(cors())
app.use(express.json())

// Route handlers
app.use("/couples", couplesRouter)
app.use("/send", sendRouter)

// Error handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app
