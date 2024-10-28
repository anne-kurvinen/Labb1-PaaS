const dotenv = require('dotenv')
const express = require('express'),
  { Client } = require('pg')

  const app = express()
  dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })
  
  client.connect()

  app.get('/', (_request, response) => {
    response.send({ hello: 'World' })
  })
  
  
app.get('/api', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM movies WHERE title = $1',
    ['Seven']
  )
  response.send(rows)
})

  const port = process.env.PORT || 3000
  
  app.listen(port, () => {
    console.log(`Redo på http://localhost:${port}`)
  })


