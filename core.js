const express = require('express')
const fetch = require("node-fetch")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Go to /api to get the json data. ')
})

app.get('/api', (req, res) => {
  const id = req.query.id
  // You can change the endpoint or make even new system with routes. 
  fetch(`https://groups.roblox.com/v1/groups/${id}`)
   .then(re => re.json())
   .then(body => res.json(body))
})

app.listen(port, () => {
  console.log(`Roblox-API-Request listening at https://yourappname.herokuapp.com`)}
)
