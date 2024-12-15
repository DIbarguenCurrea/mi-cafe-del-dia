const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

//RUTAS BASICAS

// app.get("/api/cafes", async (req, res) => {
//   const { rows } = await pool.query("SELECT * FROM cafes");
//   res.json(rows);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
