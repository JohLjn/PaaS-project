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

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM poems");

  response.send(rows);
});

app.post("/api", async (request, response) => {
  const { name, age, password, poemtext } = request.body;

  const result = await client.query(
    "INSERT INTO poems (name, age, password, poemtext) VALUES ($1, $2, $3, $4)",
    [name, age, password, poemtext]
  );

  response.send(result);
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
