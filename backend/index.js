const dotenv = require('dotenv'),
 express = require('express'),
  { Client } = require('pg');
  
  const app = express()
  dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })
  
  client.connect()

app.get('/movies', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM movies',
  )
  response.send(rows)
})

app.get('/actors', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM actors',
  )
  response.send(rows)
})

app.post('/movies', async (_request, response) => {
  const { rows } = await client.query(
    'INSERT INTO movies (title, productionYear) VALUES ($1, $2)',
    [title, productionYear]
  )
  response.send(rows)
})

app.delete('/actors/:id', async (_request, response) => {
  const { rows } = await client.query(
    'DELETE FROM actors WHERE id = $1',
    [id]
  )
  response.send(rows)
})

  const port = process.env.PORT || 3000
  
  app.listen(port, () => {
    console.log(`Redo på http://localhost:${port}`)
  })
