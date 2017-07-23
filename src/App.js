import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI';

import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks/>
        )}/>
        <Route path='/' exact render={() => (
          <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
