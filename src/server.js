require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.listen(PORT, () => console.log('server is listening on port:', PORT))