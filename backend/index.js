const express = require("express"),
  path = require("path");

const app = express();
app.use(express.json());

const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

// Get all poems
app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM poems");

  response.send(rows);
});

// Apply a poem
app.post("/api", async (request, response) => {
  const { name, age, password, poemtext, publishdate } = request.body;

  const result = await client.query(
    "INSERT INTO poems (name, age, password, poemtext, publishdate) VALUES ($1, $2, $3, $4, $5)",
    [name, age, password, poemtext, publishdate]
  );

  response.send(result);
});

// Change a poem (Password required)
app.put("/api/:id", async (request, response) => {
  const id = request.params.id;
  const { newName, newAge, newPoemtext, newDate } = request.body;

  const result = await client.query(
    "UPDATE poems SET name = $1, age = $2, poemtext = $3, publishdate = $4 WHERE id = $5",
    [newName, newAge, newPoemtext, newDate, id]
  );

  response.send(result);
});

//Delete a poem (Password required)
app.delete("/api/:id", async (request, response) => {
  const id = request.params.id;

  const result = await client.query("DELETE FROM poems WHERE id = $1", [id]);

  response.send(result);
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
