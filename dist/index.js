"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const BookStore_1 = require("./BookStore");
const types_1 = require("./types");
const utilities_1 = require("./utilities");
const bookstore = new BookStore_1.BookStore();
const book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "1234567890",
    price: 10.99,
    genre: types_1.Genre.Fiction,
    publishedYear: 1925,
};
const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "0987654321",
    price: 8.99,
    genre: types_1.Genre.Fiction,
    publishedYear: 1960,
};
bookstore.addBook(book1);
bookstore.addBook(book2);
(0, utilities_1.logItem)(bookstore.getBooks());
const bookTitle = (0, utilities_1.getItemProperty)(book1, "title");
console.log(`The title of the book is: ${bookTitle}`);
bookstore.printBookDetails("1234567890");
console.log(bookstore.filterBooksByGenre(types_1.Genre.Fiction));
