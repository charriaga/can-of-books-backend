const mongoose = require('mongoose');
console.log('inside book.js file')
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    description: String,
    status: String,
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
