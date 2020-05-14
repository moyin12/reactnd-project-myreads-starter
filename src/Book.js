import React from 'react';
import BookShelfChange from './BookShelfChange';


const Book = () =>  (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
                    <BookShelfChange />
                    </div>
                    <div className="book-title">1776</div>
                    <div className="book-authors">David McCullough</div>
                </div>
            </li>
        )
export default BookShelfChange;