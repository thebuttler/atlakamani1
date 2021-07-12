import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem2 from '../CardItem2';
import {useState, useEffect} from 'react';

export default function Products() {
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
              <CardItem2 onClick={() => setButtonPopup(true)} 
                src='/images/lessons.jpg'
                label='Surf Classes: 20$ P/P'
                /*path='/services'*/
              />
            </ul>
            <ul className='cards__items'>
              <CardItem2 onClick={() => setButtonPopup(true)} 
                img src='/images/fishing.jpg'
                label='Fishing Tours: 160$'
                /*path='/services'*/
              />
            </ul>

          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          </div>
        </div>
      </div>
    );
  }