const express = require("express");
const { getData, getDataById, postData, deleteData, updateData } = require("../Controllers");
const app = express();

const router = express.Router();

router.route("/").get(getData).post(postData);

router.route('/:id').get(getDataById).delete(deleteData).patch(updateData)

module.exports = router;
