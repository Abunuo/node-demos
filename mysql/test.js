var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'http://localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})

connection.connect(function(err){
  console.log(err);
})

connection.query('select 1 + 1 as solution', function(err, results, fields) {
  if(err) return err;
  console.log('Results is: ', results[0].solution);
})
