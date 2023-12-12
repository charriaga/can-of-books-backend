require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/books');
const PORT = process.env.PORT || 3001;
const Book = require('./src/Models/Book');
const app = express();

app.use(cors());

app.get('/books', async (request, response) => {
  const filterQuery = {};
  if (request.query.title) {
    filterQuery.title = request.query.title;
  }
  const books = await Book.find(filterQuery);
  response.json(books);
})

app.listen(PORT, () => console.log('server is listening on port:', PORT))
