const mysql = require('mysql');
const { get } = require('./routes/customer');


// middlewares


  
  // create connection instance
  let con = mysql.createConnection(config);
  
  //connect
  let getQuery = 'SELECT * FROM USERS'; 
  con.connect(err => {
    if(err) console.log(err.message);
    else console.log('conected');
  });

  //query
  con.query(getQuery, (err, result) => {
    if(err) console.log(err.message);
    else console.log(result);
  });

  //close the connection
  con.end();

  //Post
  let postQuery = 'INSERT INTO USERS SET firstname = ?, lastname = ?, email = ?;'; 
  
con.connect(function (err) {
  if (err) throw err;
  con.query(postQuery, ['dan', 'pan', 'dan@pan.com'], (err, result) => {
    con.end();
    if (err) {
      console.log(err);
    } else {
      console.log(result.insertId);
    }
  });
});
  