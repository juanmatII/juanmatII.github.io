const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// Reemplaza con tu URI de conexión
const uri = "mongodb+srv://juanarenas1522:zjHjKQce74uUm09X@cluster0.7vssc8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("sample_mflix");
    const peliculas = await db.collection("movies").find().limit(3).toArray();
    res.send(`
      <h1>Películas</h1>
      <ul>
        ${peliculas.map(p => `<li><strong>${p.title}</strong> (${p.year})</li>`).join('')}
      </ul>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar películas');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
