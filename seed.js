require('dotenv').config();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/books');
mongoose.connect(process.env.DATABASE_URL);
const Book = require('./src/Models/Book');

async function seedDB() {
    const newBook = new Book({
        title: 'A Song of Fire and Ice',
        description: 'Battle for the throne',
        status: 'In stock'
    })
    newBook.save();

    const bookTwo = new Book({
        title:'Dracula',
        description: 'Super old vampire invade England',
        status: 'In stock',
    })
    bookTwo.save();

    const bookThree = new Book({
        title: 'The Ice Dragon',
        description: 'The story of a young girl, Adara, who befriends an ice dragon after the death of her mother.',
        status: 'In stock',
    })
    bookThree.save();
    mongoose.disconnect();
}

seedDB();
