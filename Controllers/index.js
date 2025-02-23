const pool = require("../connection"); // ✅ Correct import

function getData(req, res) {
  const get_query = `SELECT * FROM demotable`;

  pool.query(get_query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result.rows);
    }
  });
}

function getDataById(req, res) {
  const { id } = req.params;

  const id_query = `SELECT * FROM demotable WHERE id = $1`;

  pool.query(id_query, [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result.rows);
    }
  });
}

function postData(req, res) {
  const { name, id } = req.body;

  const post_query = `INSERT INTO demotable(name, id) VALUES ($1 , $2)`;

  pool.query(post_query, [name, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "User Added" });
    }
  });
}

function deleteData(req, res) {
  const { id } = req.params;

  const delete_query = `DELETE FROM demotable WHERE id = $1`;

  pool.query(delete_query, [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "User Deleted" });
    }
  });
}

function updateData(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const update_query = `UPDATE demotable SET name = $1 WHERE id = $2`;

  pool.query(update_query, [name, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        message: "User Updated",
      });
    }
  });
}
module.exports = {
  getData,
  getDataById,
  postData,
  deleteData,
  updateData,
};
