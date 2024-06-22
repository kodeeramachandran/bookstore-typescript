"use strict";
// src/BookStore.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStore = void 0;
class BookStore {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBooks() {
        return this.books;
    }
    findBookByISBN(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
    filterBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }
    printBookDetails(isbn) {
        const book = this.findBookByISBN(isbn);
        if (book) {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}`);
        }
        else {
            console.log(`Book with ISBN ${isbn} not found.`);
        }
    }
}
exports.BookStore = BookStore;
