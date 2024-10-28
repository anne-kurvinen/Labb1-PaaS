/* const dotenv = require('dotenv')
const express = require('express'),
  { Client } = require('pg')
  
  const app = express()
  dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })
  
  client.connect()

  app.get('/api', (_request, response) => {
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
  }) */

    const express = require('express'),
    path = require('path')
  
  const app = express()
  
  app.get('/api', (_request, response) => {
    response.send({ hello: 'World' })
  })
  
  app.use(express.static(path.join(path.resolve(), 'dist')))
  
  app.listen(3000, () => {
    console.log('Redo på http://localhost:3000/')
  })
