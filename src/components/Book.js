import React, { Component } from 'react';

import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  render() {
    const {book} = this.props;
    const authors = book.authors ? book.authors.join(', ') : '';
    const bookImageLink = book.imageLinks ? book.imageLinks.thumbnail : '';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImageLink})` }}></div>
          <BookShelfChanger
            changeShelfBook={this.props.changeShelfBook}
            book={book}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
