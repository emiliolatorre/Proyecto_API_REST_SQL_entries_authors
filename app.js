const express = require("express"); //llamamos al servidor
const app = express(); //inicializar el servidor
const port = 3000;

// Importar Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Rutas
const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes");

app.use(express.json()); // Habilito recepción de JSON en servidor

app.get("/", (req, res) => {
  res.send("Hello World testing!");
});

// Rutas
//API
app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);
app.use('/api/authors/:email?',authorsRoutes);

app.use(error404); // Middleware gestiona error 404

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});