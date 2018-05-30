import React, { Component } from 'react';

// define the component
//define a new class called SearchBar and give it all the functionalities from React.Component
// because we want SearchBar to be able to communicate with other components, we 'promoted' it from Functional to Class-based component
class SearchBar extends Component {
  //initialise state
  constructor(props) {
    super(props); // call the parent method

    this.state = { term: '' }; // state is initialised by creating a new object and assigning it to this.state. The object we pass contains properties that we want to record in state. In this case we want to record the property `term` on state. Whenever user updates the search input, `term ` is the property we want to record that change on.
  }
  //every class-based React component needs a render method
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;

//SearchBar makes use of state by updating the user input whenever the state changes. Whenever the user enters some text we first update the state, which causes the entire component to re-render. We made the input element a controlled component by telling it to receive its value from state.
