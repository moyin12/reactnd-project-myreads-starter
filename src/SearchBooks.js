import React, { Component } from 'react';
import SearchBookResult from './SearchBookResult';
import SearchBookInput from '/SearchBookInput';

class SearchBook extends Component{
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <SearchBookInput />
            </div>
            <SearchBookResult />
          </div>
        )
    }
}
export default SearchBook;