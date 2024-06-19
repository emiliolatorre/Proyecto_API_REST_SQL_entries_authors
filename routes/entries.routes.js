const express = require('express');
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getAllEntries);
router.put('/', entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// PUT http://localhost:3000/api/entries
// DELETE http://localhost:3000/api/entries

// {
//     "title": "Estamos de Lunes de Back 2",
//     "content": "La venganza del Elefante",
//     "date": "2024-06-17",
//     "email": "guillermu@thebridgeschool.es",
//     "category": "Software",
//     "old_title": "Estamos de lunes de Back"
// }

