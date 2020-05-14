import React, { Component } from 'react';
import BookShelf from './BookShelf';

class ListBooks extends Component{
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf />
                    </div>
                </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
            </div>
        )
    }
}
export default ListBooks;