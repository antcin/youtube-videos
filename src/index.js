import React, { Component } from 'react'; //used to create react components
import ReactDOM from 'react-dom'; //used to interact with DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAI9gv4_HoVdJ293SsHdZ3R7ouGRBfuGTI';

// Create new component. this component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); //synctatic sugar that works when key and property have same name
      // this.setState({ videos : videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
