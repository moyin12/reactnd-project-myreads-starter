import React, { Component } from 'react';

class SearchBookInput extends Component{
    constructor(props){
        super(props)
    }
    state = {
        value: '',
    };

    handleChange = e => {
        const inputValue = e.target.value;
        this.setState({ value: inputValue } , () => {
            this.props.onSearch(inputValue);
        });
    }
    render() {
        return(
            <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoFocus
                />
            </div>
        );
    }
}

export default SearchBookInput;