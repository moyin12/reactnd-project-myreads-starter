import React, { Component } from 'react';
import SearchBookResult from './SearchBookResult';
import SearchBookInput from './SearchBookInput';
import { Link } from 'react-router-dom';

class SearchBook extends Component{
    render(){
      const {searchBooks , myBooks, onSearch, onResetSearch, onMove} = this.props;
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search">
                  Close
                </button>
              </Link>
              <SearchBookInput />
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