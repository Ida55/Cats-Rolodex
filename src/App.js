import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ''
    };
  }

  //  Life Cycle method (we have access to it because of our class component)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cats: users }));
  } /* 1st we've made a native JavaScript fetch request in order to fetch and make an api request 
  to a specific url, that fetch request returns a response (promise), which we demand that it be 
  converted into a json format, then we're taking the 'users' list that we got back from that file 
  and we set our landscapes array to a new state (via this.setState) which puts the users list in 
  our array of landscapes (which we emptied for that purpose) */


  render() { 
    const { cats, searchField } = this.state; // Object destructuring equivalent to writing this -> const cats = this.state.cats & const searchField = this.state.searchField
    const filteredCats = cats.filter(cat => cat.name.includes(searchField)
    ); // original code was this -> const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));

    return ( 
    <div className='App'>
      <h1>Cats Rolodex</h1>
      <SearchBox 
      placeholder='search kitty'
      handleChange={e => this.setState({ searchField: e.target.value })}
      />
      <CardList cats={filteredCats} /> {/* passing the state as an atribute to the component, so we gave the CardList component a state, the component receives it as a prop*/}
      {/* <img src='http://loremflickr.com/400/300/moto' alt=''/> */}
    </div>
   );
  }
}
 
export default App;