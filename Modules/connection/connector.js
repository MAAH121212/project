import mysql from "mysql2";

const q = mysql.createConnection({
    host: 'localhost',
    database: 'Friends',
    user: 'root',
    password: ''
})

export default q;