const syncSQL = require('sync-sql');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'persona'
  };

let query = 'select * from users';

//var output = syncsql.mysql(config, query);

//console.log(output.data.rows);

function getDBData(config, query){

    return syncsql.mysql(config, query).data.rows;
}
   let res = getDBData(config, query);
   console.log(res);