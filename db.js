/** Database for lunchly */
const pg = require("pg");

const db = new pg.Client("postgresql://username@localhost:3000/lunchly");

db.connect();

module.exports = db;
