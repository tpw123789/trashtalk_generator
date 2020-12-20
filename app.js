const express = require('express')
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const generatetrashtalk = require("./generate_trashtalk")
const app = express()
const port = 3000

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  console.log("get from POST request", Object.keys(req.body).length)
  const options = req.body
  const password = generatetrashtalk(req.body)
  console.log(generatetrashtalk(req.body))
  res.render("index", { password: password, options: options })
})

app.listen(port, () => {
  console.log("The Express server is running on http://localhost:3000")
})