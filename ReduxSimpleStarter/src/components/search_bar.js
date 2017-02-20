import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        // calling parent method in Component here
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange= {(event) => this.setState({term: event.target.value})}/>
            </div>
        );
    }

}

// export
export default SearchBar;
