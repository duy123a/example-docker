const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.get('/', (req, res) => {
  try {
    const connection = mysql.createConnection({
      host     : 'node_db',
      user     : 'root',
      password : '123456',
      database : 'test_db'
    });
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      return res.json({
        message: results[0].solution,
      });
    });
  }
  catch (e) {
    return res.json({
      message: 'unable to connect to database',
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
