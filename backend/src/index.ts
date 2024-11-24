import { Request, Response } from "express";
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import  { Client } from "pg";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(), "dist")));
dotenv.config();
app.use(cors());
app.use(express.json());



const client = new Client({
  connectionString: process.env.PGURI,
});


 client.connect()
  .catch((err: any) => console.error("Connection error", err.stack));

app.get("/api/movies", async (_request: Request, response: Response) => {
  try {
    const { rows } = await client.query(
      "SELECT * FROM movies WHERE productionyear > $1",
      [1960]
    );
    response.json(rows);
  } catch (err) {
    console.error(err);
    response.status(500).send("Server Error");
  }
});

app.get("/api/actors", async (_request: Request, response: Response) => {
  try {
    const { rows } = await client.query("SELECT * FROM actors");
    response.json(rows);
  } catch (err) {
    console.error(err);
    response.status(500).send("Server Error");
  }
});
async function fetchMovies() {
  try {
    const response = await fetch('/your-api-endpoint');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
}

app.post("/api/movies", async (_request: Request, response: Response) => {
  const { title, productionYear } = _request.body;
  try {
    const result = await client.query(
      "INSERT INTO movies (title, productionYear) VALUES ($1, $2) RETURNING *",
      [title, productionYear]
    );
    response.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    response.status(500).send("Server Error");
  }
});

app.delete("/api/movies/:id", async (_request: Request, response: Response) => {
  const { id } = _request.params;
  try {
    await client.query("DELETE FROM movies WHERE id = $1", [id]);
    response.status(204).send();
  } catch (err) {
    console.error(err);
    response.status(500).send("Server Error");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`);
});
function customCors(): any {
  throw new Error("Function not implemented.");
}
