// 1. Primero, probar si las queries funcionan en pgAdmin4
const queriesAuthors = {
    // query para [GET] http://localhost:3000/api/authors
    getAllAuthors: `
    SELECT *
    FROM authors
    ORDER BY id_author;`,
    //query para [GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es
    getAuthorByEmail:`
    SELECT *
    FROM authors
    WHERE email=$1
    ORDER BY id_author;`,
    //query para [POST] http://localhost:3000/api/authors/
    createAuthor:`INSERT INTO authors
    (name, surname, email, image)
    VALUES ($1, $2, $3, $4);`,
    //query para [PUT] http://localhost:3000/api/authors/
    updateAuthor:`UPDATE authors
    SET
    name=$1,
    surname=$2,
    email=$3,
    image=$4
    WHERE email=$5;`,
    // query para [DELETE] http://localhost:3000/api/authors/
    deleteAuthor:`DELETE
    FROM authors
    WHERE email=$1;`
}
module.exports = queriesAuthors;