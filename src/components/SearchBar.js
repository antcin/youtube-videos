import React, { Component } from 'react';

// define the component
//define a new class called SearchBar and give it all the functionalities from React.Component
// because we want SearchBar to be able to communicate with other components, we 'promoted' it from Functional to Class-based component
class SearchBar extends Component {
  //every class-based React component needs a render method
  render() {
    return <input onChange={(event) => console.log(event.target.value) } />
  }

  //triggered whenever event occurs
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
