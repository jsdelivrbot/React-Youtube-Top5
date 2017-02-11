import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, should produce some HTML
const App = function(){
    return <div>Hi!</div>; //jsx cannot be interpreted by the browser
}


// Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // make an instance with self-closing tag


//
