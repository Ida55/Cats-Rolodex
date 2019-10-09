import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      landscapes: []
    };
  }

  //  Life Cycle method (we have access to it because of our class component)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ landscapes: users }));
  } /* 1st we've made a native JavaScript fetch request in order to fetch and make an api request 
  to a specific url, that fetch request returns a response (promise), which we demand that it be 
  converted into a json format, then we're taking the 'users' list that we got back from that file 
  and we set our landscapes array to a new state (via this.setState) which puts the users list in 
  our array of landscapes (which we emptied for that purpose)*/

  render() { 
    return ( 
    <div className='App'>
      <CardList name="Sand">
        {this.state.landscapes.map(landscape => 
        (<h1 key={landscape.id}>{landscape.username}</h1>
        ))} 
      </CardList>
      {/* <img src='http://loremflickr.com/400/300/moto' alt=''/> */}
    </div>
   );
  }
}
 
export default App;