//Connect to MySQL database using mysql2 package
//All of the queries will be executed using this connection and this file
const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.Password || 'default_password',
  database: process.env.Database|| 'default_database',
}).promise();

console.log('Connected to the database')

async function getUrl(key){
  // Retrieves the long URL associated with the given key from the database
  try {
    console.log('Retrieving URL for key:', key);
    const url =  await connection.query("select * from url_map where small_key='"+ key+ "'")
    return url
  }
  
  catch (error) {
    console.error('Error retrieving URL:', error);
    return null; // Return null if an error occurs
  }
}

async function insertUrl(key, longUrl){
  // Inserts a new URL mapping into the database
  try{
    await connection.query("insert into url_map(small_key,long_url) values('"+ key +"','"+ longUrl +"')");
    return true;
  }
  catch (error) {
    console.error('Error inserting URL:', error);
    console.error('This key already exists');
    return false 
  }
}


// Exporting objects in node.js

module.exports = {
  getUrl, 
  insertUrl,
}
