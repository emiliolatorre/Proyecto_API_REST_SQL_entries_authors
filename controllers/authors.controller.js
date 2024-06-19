const author = require('../models/authors.model'); // Importar el modelo de la BBDD

// GET http://localhost:3000/api/authors --> ALL
const getAllAuthors = async (req, res) => {
    let authors;
    try {
        authors = await author.getAllAuthors();
        res.status(200).json(authors); // [] con las entries encontradas
      } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  };

  const getAuthorByEmail = async (req, res) => {
    let authors;
    try {
      if (req.query.email) {
        authors = await author.getAuthorByEmail(req.query.email);
      }
      res.status(200).json(authors); // [] con las entries encontradas
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  };

// Crear entry por email
const createAuthor = async (req, res) => {
    const newEntry = req.body; // {name,surname,email,image}
    if (
      "name" in newEntry &&
      "surname" in newEntry &&
      "email" in newEntry &&
      "image" in newEntry
    ) {
      try {
        const response = await author.createAuthor(newEntry);
        res.status(201).json({
          items_created: response,
          data: newEntry,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };

  const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body; // {name, surname, email, image, old_email}
    if (
      "name" in modifiedAuthor &&
      "surname" in modifiedAuthor &&
      "email" in modifiedAuthor &&
      "image" in modifiedAuthor &&
      "old_email" in modifiedAuthor
    ) {
      try {
        const response = await author.updateAuthor(modifiedAuthor);
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

  const deleteAuthor = async (req, res) => {
    const deletedEmail = req.body; // title
    if (deletedEmail) {
      try {
        const response = await author.deleteAuthor(deletedEmail);
        res.status(201).json({
          items_updated: response,
          data: deletedEmail,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };






  module.exports = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}