const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      
      
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Body parser middleware
app.use(express.json());

app.get('/', function (req,res){
  var con = mysql.createConnection(config);
  con.connect(function (err){
    if (err) throw err;
    con.query('select * from users', (err, records) => {
      con.end();
      if (err) return err.message;
      else{
        res.status(200).json(
          
        );
      }
    });
  });
});

// routes
var mysql = require('mysql');
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});



