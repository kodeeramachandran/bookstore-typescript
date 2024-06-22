// src/index.ts

import { BookStore } from './BookStore';
import { Book, Genre } from './types';
import { logItem, getItemProperty } from './utilities';

const bookstore = new BookStore();

const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "1234567890",
  price: 10.99,
  genre: Genre.Fiction,
  publishedYear: 1925,
};

const book2: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "0987654321",
  price: 8.99,
  genre: Genre.Fiction,
  publishedYear: 1960,
};

bookstore.addBook(book1);
bookstore.addBook(book2);

logItem(bookstore.getBooks());

const bookTitle = getItemProperty(book1, "title");
console.log(`The title of the book is: ${bookTitle}`);

bookstore.printBookDetails("1234567890");

console.log(bookstore.filterBooksByGenre(Genre.Fiction));
