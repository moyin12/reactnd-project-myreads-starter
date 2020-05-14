import React from 'react';
import Book from './Book';

const SearchBookResult = ({ searchBooks, myBooks, onMove }) =>{

    const updatedBooks = searchBooks.map(book => {
        myBooks.map(bk => {
            if (bk.id === book.id){
                book.shelf = bk.shelf;
            }
            return bk;
        });
        return book;
    })
    return(
        <div className="search-books-results">
              <ol className="books-grid">
                  {updatedBooks.map(book =>(
                      <Book 
                        key={book.id}
                        book={book}
                        shelf={book.shelf ? book.shelf : 'none'}
                        onMove={onMove}
                      />
                  ))}
              </ol>
        </div>
    )
}
export default SearchBookResult;