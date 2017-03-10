import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // write the path for our own created files
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = ''; // youtube api key in string

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('LeagueOfLegends');
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // optimize search response time

        return (
            <div>
                <SearchBar onSearchTermChange= {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect= {selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        ); //jsx cannot be interpreted by the browser
    }
};

// Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(
    <App/>, document.querySelector('.container')); // make an instance with self-closing tag

//
