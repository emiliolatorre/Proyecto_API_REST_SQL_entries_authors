const pool = require('../config/db_pgsql')
const queriesAuthors = require('../queries/authors.queries') // Queries SQL

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.getAuthorByEmail, [email])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createAuthor = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateAuthor = async (entry) => {
    const { name, surname, email, image, old_email } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.updateAuthor,[
            name,
            surname,
            email,
            image,
            old_email
        ]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteAuthor = async (entry) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.deleteAuthor,[entry]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}



const authors = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = authors;

// Pruebas (TODOS COMPROBADOS)

// getAllAuthors()
// .then(data=>console.log(data))

// getAuthorByEmail("birja@thebridgeschool.es")
//     .then(data => console.log(data))

// let newAuthor = {
//     name: "Emilio",
//     surname: "Latorre",
//     email: "emilio@gmail.com",
//     img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// }

// createAuthor(newAuthor)
//     .then(data => console.log(data))

// const updatedAuthor = {
//     name: "Emilio",
//     surname: "Latorre Guerra",
//     email: "emilio2@gmail.com",
//     img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//     old_email: "jabier@thebridgeschool.es"
// }

// updateAuthor(updatedAuthor)
//     .then(data => console.log(data))

// const authorToDelete = 'emilio@gmail.com'

// deleteAuthor(authorToDelete)
//     .then(data => console.log(data))

