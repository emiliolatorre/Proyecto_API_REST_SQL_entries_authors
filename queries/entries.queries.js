// 1. Primero, probar si las queries funcionan en pgAdmin4
const queriesEntries = {
    // query para [GET] http://localhost:3000/api/entries
    getAllEntries: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    ORDER BY e.title;`,
    //query para [PUT] http://localhost:3000/api/entries/
    updateEntry: `UPDATE entries
	SET
    title=$1,
    content=$2,
    date=$3,
    id_author=(SELECT id_author FROM authors WHERE email=$4),
    category=$5
	WHERE title=$6;`,
    // query para [DELETE] http://localhost:3000/api/entries/
    deleteEntry: `DELETE
    FROM entries
    WHERE title=$1;`
}
module.exports = queriesEntries;