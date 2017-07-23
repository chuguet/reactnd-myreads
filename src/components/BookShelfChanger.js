import React, { Component } from 'react';

class BookShelfChanger extends Component {
  handleShelfChanger = (ev) => {
    ev.preventDefault();
    this.props.changeShelfBook(this.props.book, ev.target.value);
  }
  render() {
    const { book } = this.props
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={(ev) => this.handleShelfChanger(ev)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;
