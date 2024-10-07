const Book = require('../models/bookModel');
const asyncHandler = require('express-async-handler');

exports.createBook = asyncHandler(async (req, res) => {
  const { title, author, genre } = req.body;

  const book = await Book.create({ title, author, genre });
  res.status(201).json(book);
});

exports.getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

exports.updateBook = asyncHandler(async (req, res) => {
  const { title, author, genre, available } = req.body;
  const book = await Book.findById(req.params.id);

  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.available = available !== undefined ? available : book.available;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

exports.deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await book.remove();
    res.json({ message: 'Book removed' });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

exports.borrowBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  const userId = req.user._id;

  if (book && book.available) {
    book.available = false;
    book.borrower = userId;
    const borrowedBook = await book.save();
    res.json(borrowedBook);
  } else {
    res.status(404);
    throw new Error('Book is not available');
  }
});
