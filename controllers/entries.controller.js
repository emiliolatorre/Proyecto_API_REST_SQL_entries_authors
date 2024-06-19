const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

// GET http://localhost:3000/api/entries --> ALL
const getAllEntries = async (req, res) => {
    let entries;
    try {
        entries = await entry.getAllEntries();
        res.status(200).json(entries); // [] con las entries encontradas
      } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  };
  
const updateEntry = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,email,category,old_title}
    if (
      "title" in modifiedEntry &&
      "content" in modifiedEntry &&
      "date" in modifiedEntry &&
      "email" in modifiedEntry &&
      "category" in modifiedEntry &&
      "old_title" in modifiedEntry
    ) {
      try {
        const response = await entry.updateEntry(modifiedEntry);
        res.status(201).json({
          items_updated: response,
          data: modifiedEntry,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };


  const deleteEntry = async (req, res) => {
    const deletedTitle = req.body; // title
    if (deletedTitle) {
      try {
        const response = await entry.deleteEntry(deletedTitle);
        res.status(201).json({
          items_updated: response,
          data: deletedTitle,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };

module.exports = {
    getAllEntries,
    updateEntry,
    deleteEntry
}

// PUT http://localhost:3000/api/entries
// {
//     "title": "Estamos de Lunes de Back 2",
//     "content": "La venganza del Elefante",
//     "date": "2024-06-17",
//     "email": "guillermu@thebridgeschool.es",
//     "category": "Software",
//     "old_title": "Estamos de lunes de Back"
// }