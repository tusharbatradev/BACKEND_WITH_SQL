const express = require('express');
const router = require('./Routes');

const app = express();
app.use(express.json())

app.use(router)

app.listen(3000, () => console.log('App is running on port 3000'))

