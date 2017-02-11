import React from 'react';

// Create a new component, should produce some HTML
const App = function(){
    return <div>Hi!</div>; //jsx cannot be interpreted by the browser
}


// Take this component's generated HTML and put it on the page(in the DOM)
React.render(App);


//
