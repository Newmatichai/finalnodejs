require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
});

async function getAll() {
    const query = 'SELECT * FROM Tshirt';
    const [data] = await connection.promise().query(query);
    return data;
}

async function remove(id) {
    const query = 'DELETE FROM Tshirt WHERE id = ?';
    await connection.promise().query(query, [id]);
    return;
}

async function insert(tshirt) {
    const query = 'INSERT INTO Tshirt (size, color, price, productstock) VALUES (?, ?, ?, ?)';
    const [result] = await connection.promise().query(query, [tshirt.size, tshirt.color, tshirt.price, tshirt.productstock]);
    return { ...tshirt, id: result.insertId };
}

async function update(tshirt) {
    const query = 'UPDATE Tshirt SET size = ?, color = ?, price = ?, productstock = ? WHERE id = ?';
    await connection.promise().query(query, [tshirt.size, tshirt.color, tshirt.price, tshirt.productstock, tshirt.id]);
    return tshirt;
}

async function get(id) {
    const query = 'SELECT * FROM Tshirt WHERE id = ?';
    const [data] = await connection.promise().query(query, [id]);
    return data.pop();
}

function save(tshirt) {
    if (!tshirt.id) {
        return insert(tshirt);
    } else {
        return update(tshirt);
    }
}

module.exports = { getAll, remove, get, save };
