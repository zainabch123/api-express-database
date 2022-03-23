//Load our .env file
require('dotenv').config()

//Require the postgres library
const { Client } = require("pg");

//Get the connection string from process.env - 
//the dotenv library sets this variable based 
//on the contents of our env file
const connection = process.env.PGURL;

//Create a new connection to the database. Client
//is an object provided to use by the postgres library
const db = new Client(connection);

module.exports = db;
