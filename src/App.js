import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI';

import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
  }
  changeShelfBook = (bookToChange, newShelf) => {
    BooksAPI.update(bookToChange, newShelf)
      .then(data => {
        this.setState(currentStatus => ({
          books: currentStatus.books.map(book => {
            if(bookToChange.id === book.id) {
              book.shelf = newShelf;
            }
            return book;
          })
        }));
      });
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books}/>
        )}/>
        <Route path='/' exact render={() => (
          <ListBooks changeShelfBook={this.changeShelfBook} books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
