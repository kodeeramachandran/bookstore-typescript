// src/BookStore.ts

import { Book, Genre, ISBN } from './types';


class BookStore {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBooks(): Book[] {
    return this.books;
  }

  findBookByISBN(isbn: ISBN): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }

  filterBooksByGenre(genre: Genre): Book[] {
    return this.books.filter(book => book.genre === genre);
  }

  printBookDetails(isbn: ISBN): void {
    const book = this.findBookByISBN(isbn);
    if (book) {
      console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}`);
    } else {
      console.log(`Book with ISBN ${isbn} not found.`);
    }
  }
}

export { BookStore };
