import React from 'react'; //used to create react components
import ReactDOM from 'react-dom'; //used to interact with DOM

const API_KEY = 'AIzaSyAI9gv4_HoVdJ293SsHdZ3R7ouGRBfuGTI';

// Create new component. this component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
