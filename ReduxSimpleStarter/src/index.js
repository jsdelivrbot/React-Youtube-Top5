import React from 'react';
import ReactDOM from 'react-dom';

// write the path for our own created files
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAt2rKKfigSTRp2JgE2rzFifiURCqCfBc8'; // youtube api key in string

// Create a new component, should produce some HTML
// declare a function with new ES 6 syntax
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ); //jsx cannot be interpreted by the browser
};


// Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // make an instance with self-closing tag


//
