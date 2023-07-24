const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost', 
  port: 3306,  
  user: 'root', 
  password: 'root', 
  database: 'pg-course', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
  connection.release();
});

module.exports = pool;