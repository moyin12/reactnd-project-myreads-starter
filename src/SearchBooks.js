import React, { Component } from 'react';
import SearchBookResult from './SearchBookResult';
import SearchBookInput from './SearchBookInput';
import { Link } from 'react-router-dom';

class SearchBook extends Component{
    render(){
      const {searchBooks , myBooks, onSearch, onReset, onMove} = this.props;
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search" onClick={onReset}>
                  Close
                </button>
              </Link>
              <SearchBookInput 
              // I just put this line and I am no longer getting the error
                onSearch={onSearch}
              />
            </div>
            <SearchBookResult 
              searchBooks={searchBooks}
              myBooks = {myBooks}
              onMove={onMove}
            />
          </div>
        )
    }
}

export default SearchBook;