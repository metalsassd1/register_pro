const mysql = require('mysql2');
const {DB_host,DB_user,DB_password,DB_database} = process.env

const dbConnection = mysql.createPool({
    host     : 'localhost',
    user     : 'metha',
    password : '12345678',
    database : 'testregister'
}).promise();

dbConnection.getConnection(function(err, connection) {
  if (err) {
    console.error('Error getting connection from the pool: ' + err.stack);
    return;
  }

  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database: ' + err.stack);
      return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
  });
});

module.exports = dbConnection;