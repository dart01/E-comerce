const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'diego01',
    database: 'ecommerce_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL!');
});