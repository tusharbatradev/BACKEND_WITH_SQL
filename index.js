const express = require("express");
const cors = require("cors"); // ✅ Import CORS
const router = require("./Routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("App is running on port 3000"));
