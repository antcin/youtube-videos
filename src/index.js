import _ from 'lodash';
import React, { Component } from 'react'; //used to create react components
import ReactDOM from 'react-dom'; //used to interact with DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyAI9gv4_HoVdJ293SsHdZ3R7ouGRBfuGTI';

// Create new component. this component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react.js');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //synctatic sugar that works when key and property have same name
      // this.setState({ videos : videos })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300) //fat arrow function passed to debounce. Debounce returns a new function that can only be called once every 300 ms. by passing it in onSearchTermChange, it's only going to be run in 300 ms

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
