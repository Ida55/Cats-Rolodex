import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';


//  CardList component ( -> functional component)
export const CardList = (props) => {
return <div className='card-list'>{props.cats.map(cat => 
    (<Card key={cat.id} cat={cat}/>
    ))} </div>
}; /* here the props (of -> {props.cats.map etc..} is a reference to what we passed into the CardList component in the App.js 
file (inside the render() method) -> cats={this.state.cats} */