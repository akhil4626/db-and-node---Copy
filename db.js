function readFromCrud(callback) {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud_node'
  });

  con.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      callback({ error: 'Database connection error' });
      return;
    }
    console.log("Connection to the database has been successful");

    let query = "SELECT * FROM sql_node"; // Query to select all rows from the 'sql_node' table
    con.query(query, (err, result) => {
      if (err) {
        console.error('Error executing select query:', err);
        callback({ error: 'Error executing select query' });
        return;
      }
      callback(result);
      con.end(); // Close the database connection
    });
  });
}





function createInCrud(names, email,PhoneNumber,Address, callback) {
    var mysql = require('mysql');
  
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'crud_node'
    });
  
    con.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        callback({ error: 'Database connection error' });
        return;
      }
      console.log("Connection to the database has been successful");
  
      let query = "INSERT INTO sql_node (names, email,PhoneNumber,Address) VALUES (?,?,?,?)";
      con.query(query, [names, email,PhoneNumber,Address], (err, result) => {
        if (err) {
          console.error('Error executing insert query:', err);
          callback({ error: 'Error executing insert query' });
          return;
        }
        callback(result);
        con.end(); // Close the database connection
      });
    });
  }
  
  function updateInCrud(id, names, email, PhoneNumber, Address, callback) {
    var mysql = require('mysql');
  
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'crud_node'
    });
  
    con.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        callback({ error: 'Database connection error' });
        return;
      }
      console.log("Connection to the database has been successful");
  
      let query = "UPDATE sql_node SET names = ?, email = ?, PhoneNumber = ?, Address = ? WHERE id = ?";
      // Use ? placeholders to match the order of values provided in the query
      con.query(query, [names, email, PhoneNumber, Address, id], (err, result) => {
        if (err) {
          console.error('Error executing update query:', err);
          callback({ error: 'Error executing update query' });
          return;
        }
        callback(result);
        con.end(); // Close the database connection
      });
    });
  }
  

  

  
  function deleteInCrud(id, callback) {
    var mysql = require('mysql');
  
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'crud_node'
    });
  
    con.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        callback({ error: 'Database connection error' });
        return;
      }
      console.log("Connection to the database has been successful");
  
      let query = "DELETE FROM sql_node WHERE id = ?";
      con.query(query, [id], (err, result) => {
        if (err) {
          console.error('Error executing delete query:', err);
          callback({ error: 'Error executing delete query' });
          return;
        }
        callback(result);
        con.end(); // Close the database connection
      });
    });
  }
  
  module.exports = {
    createInCrud,
    updateInCrud,
    deleteInCrud,
    readFromCrud
  };