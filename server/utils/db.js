const { createPool } = require('mysql2/promise');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist',
  port: 3001, 
  namedPlaceholders: true,
});

pool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to MySQL database:', error.message);
  });

module.exports = {
  pool,
};
