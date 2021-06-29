import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem1 from './CardItem1';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_0144.jpg'
              text='Grab your friends, family or both for a meal at the sound of the waves'
              label='Facilities'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_0096.jpg'
              text='Comfortable and cozy rooms, perfect after a long session on the waves'
              label='Rooms'
              path='/services'
            />
            <CardItem
              src='images/mango2.jpg'
              text='We have one of the best waves in the region, take a look!'
              label='Waves'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem1
              src='images/5.jpg'
              text='Explore, rest or read.'
              label='Amenities'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
