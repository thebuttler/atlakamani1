import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem1 from '../CardItem1';
import CardItem from '../CardItem';
import {useState, useEffect} from 'react';

export default function Services() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  setTimeout(() =>{
    setTimedPopup(true);
  }, 3000);

    return (
      <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_0096.jpg'
              text='Single Room $60.00'
              label='Single'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_0096.jpg'
              text='Double Room $70.00'
              label='Doble'
              path='/services'
            />
            <CardItem
              src='images/IMG_0096.jpg'
              text='Triple Room $90.00'
              label='Triple'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem1
              src='images/IMG_0096.JPG'
              text='Cuadruple Room $100.00'
              label='Cuadruple'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    );
  }