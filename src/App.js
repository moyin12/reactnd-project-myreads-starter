import React from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBooks'

const bookshelves = [
  { key: 'currentlyReading' , name: 'Currently Reading' },
  { key: 'wantToRead' , name: 'Want to Read' },
  { key: 'read' , name: 'Read' },
]
class BooksApp extends React.Component {
    state = {
      myBooks: [],
      searchBooks: [],
      error: false,
    };
    componentDidMount =() => {
      BooksAPI.getAll()
      .then(books => {
        this.setState({ myBooks: books });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      })
    };
    // This function is to move the books to the different shelf sections
    moveBook = (book, shelf) => {
      BooksAPI.update(book, shelf).catch(err => { 
        console.log(err);
        this.setState({  error: true });
      });
      if (shelf === 'none'){
        this.setState(prevState => ({
          myBooks: prevState.myBooks.filter(bk => bk.id !== book.id)
        }));
      } else {
        book.shelf = shelf;
        this.setState(prevState => ({
          myBooks: prevState.myBooks.filter(bk => bk.id !== book.id)
        }))
    }
  }

  // Function to search for book
  searchForBook = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  // Function to reset the search after completing a search
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  }


  render() {
    const { myBooks, searchBooks, error } = this.state;
    return (
      <div className="app">
        <Route 
          exact
          path="/"
          render={() => (
            <ListBooks 
              bookshelves ={bookshelves}
              books ={myBooks}
              onMove = {this.moveBook}
            />
          )}
        />
        <Route 
          path="/search"
          render ={() => (
          <SearchBook 
            searchBooks = {searchBooks}
            myBooks = {myBooks}
            onSearch = {this.searchForBook}
            onMove = {this.moveBook}
            onReset = {this.resetSearch}
          />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
