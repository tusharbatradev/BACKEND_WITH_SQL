const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Admin",
  database: "demopost",
});

pool
  .connect()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("Connection Error", err));

module.exports = pool;
