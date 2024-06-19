const pool = require('../config/db_pgsql')
const queriesEntries = require('../queries/entries.queries') // Queries SQL

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesEntries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateEntry = async (entry) => {
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesEntries.updateEntry,[
            title, 
            content,
            date,
            email, 
            category,
            old_title
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
const deleteEntry = async (entry) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesEntries.deleteEntry,[entry]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}



const entries = {
    getAllEntries,
    updateEntry,
    deleteEntry
}

module.exports = entries;




// Pruebas (TODOS COMPROBADOS)

// getAllEntries()
// .then(data=>console.log(data))

// const updatedEntry = {
//     title: "Estamos de Lunes de Back 2",
//     content: "La venganza del Elefante",
//     date: "2024-06-17",
//     email: "guillermu@thebridgeschool.es",
//     category: "Software",
//     old_title: "Estamos de Lunes de Back 3"
// }

// updateEntry(updatedEntry)
//     .then(data => console.log(data))


// const titleToDelete = 'Estamos de Lunes de Back 2'

// deleteEntry(titleToDelete)
//     .then(data => console.log(data))

