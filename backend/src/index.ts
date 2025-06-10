//To-Do: Handle if the code if the
// key already exists in the database
require('dotenv').config()


// Importing necessary modules
const db = require('./db.ts')
const express = require('express')
const key = require('./key_generator.ts')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/createKey', (req, res) => {
  // Endpoint to create a new key for a long URL
  console.log(req.body)
  const new_key = key.generateKey()
  db.insertUrl(new_key, req.body.url)
  res.send('http://localhost:3000/'+ new_key)
}
)

app.get('/:key',async (req, res) => { 
    await db.getUrl(req.params.key).then(result => res.redirect(result[0][0].long_url))
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})