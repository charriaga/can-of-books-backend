require('dotenv').config();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/books');
mongoose.connect(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);
const Book = require('./src/Models/Book');
console.log('book model', Book)
async function seed() {
  console.log('seeding books')
  // const newBook = new Book({
  try {
    await Book.create({
      title: 'A Song of Fire and Ice',
      description: 'Battle for the throne',
      status: 'In stock',
    });
    await Book.create({
      title: 'Dracula',
      description: 'Super old vampire invade England',
      status: 'In stock',
    });

    await Book.create({
      title: 'The Ice Dragon',
      description: 'The story of a young girl, Adara, who befriends an ice dragon after the death of her mother.',
      status: 'In stock',
    });
  } catch (error) {
    console.error('Error creating book:', error);
  }



  console.log('finished seeding books')
  mongoose.disconnect();
}

seed();
