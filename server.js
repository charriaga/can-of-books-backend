require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const PORT = process.env.PORT || 3001;
const Book = require('./src/Models/Book');
const app = express();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We\'re connected!');
});

app.use(cors());

app.get('/books', async (request, response) => {
  const filterQuery = {};
  if (request.query.title) {
    filterQuery.title = request.query.title;
  }
  const books = await Book.find(filterQuery);
  response.json(books);
})

app.post('/books', async (request, response) => {
  try {
    const { title, description, status } = request.body;
    const newBook = await Book.create(
      title,
      description,
      status,
    );

    // if (!newBook.title || !newBook.description || !newBook.status) {
    //   return response.status(400).json({ error: 'Please provide all required fields' });
    // }
    response.send(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
  }
})

app.listen(PORT, () => console.log('server is listening on port:', PORT))
