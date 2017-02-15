import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // write the path for our own created files
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAt2rKKfigSTRp2JgE2rzFifiURCqCfBc8'; // youtube api key in string

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState({videos}); // ES6 syntax of this.setState({videos: videos});
            // only works when the key and the variable name are the same.
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        ); //jsx cannot be interpreted by the browser
    }
};

// Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(
    <App/>, document.querySelector('.container')); // make an instance with self-closing tag

//
