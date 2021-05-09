const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "8400626922",
  port: 5432,
  database: "authtodolist"
});

module.exports = pool;
