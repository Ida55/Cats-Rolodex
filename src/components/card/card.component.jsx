import React from 'react';


export const Card = (props) => (
<div className='card-container'>
    <img  alt="" src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}/>
    <h2>{props.cat.name}</h2>
    <p>{props.cat.email}</p>
</div>
); /* here the props (of -> {props.landscapes.username} comes from what we passed into the Card component in the card-list.component.jsx file
   */
