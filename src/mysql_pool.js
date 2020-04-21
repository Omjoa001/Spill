import mysql from 'mysql';

// Create a cache of connections to the mysql server.
// Read more about connection pools here: https://en.wikipedia.org/wiki/Connection_pool
export let pool = mysql.createPool({
  host: 'mysql-ait.stud.idi.ntnu.no',
  connectionLimit: 5, // Limit the number of simultaneous connections to avoid overloading the mysql server
  user: 'omerj', // Replace "username" with your mysql-ait.stud.idi.ntnu.no username
  password: 'tzoJlBGq', // Replae "password" with your mysql-ait.stud.idi.ntnu.no password
  database: 'omerj'
});
