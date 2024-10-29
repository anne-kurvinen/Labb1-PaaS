const dotenv = require('dotenv'),
 express = require('express'),
  { Client } = require('pg');
  
  const app = express()
  dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })
  
  client.connect().catch(err => console.error('Connection error', err.stack));

app.get('/api/movies', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM movies WHERE productionyear > $1', [1960]);
    response.json(rows);
  } catch (err) {
    console.error(err);
    response.status(500).send('Server Error');
  }
});

app.get('/api/actors', async (_request, response) => {
  try {
    const { rows } = await client.query('SELECT * FROM actors');
    response.json(rows);
  } catch (err) {
    console.error(err);
    response.status(500).send('Server Error');
  }
});

app.post('/api/movies', async (request, response) => {
  const { title, productionYear } = request.body;
  try {
    const result = await client.query('INSERT INTO movies (title, productionYear) VALUES ($1, $2) RETURNING *', [title, productionYear]);
    response.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    response.status(500).send('Server Error');
  }
});

app.delete('/api/movies/:id', async (request, response) => {
  const { id } = request.params;
  try {
    await client.query('DELETE FROM movies WHERE id = $1', [id]);
    response.status(204).send();
  } catch (err) {
    console.error(err);
    response.status(500).send('Server Error');
  }
});

  const port = process.env.PORT || 3000
  
  app.listen(port, () => {
    console.log(`Redo på http://localhost:${port}`)
  })
