import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out some of the projects I've worked on!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem
              src='images/img-407.jpg'
              text='Highway 407 East Extension Phase 2'
              label='Structural Engineering'
              path='/projects'
            />
            <CardItem
              src='images/img-iona.jpg'
              text='Iona Island Wastewater Treatment Plant'
              label='Procurement Advisory'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-holdom.jpg'
              text='Greater Vancouver Gateway - Holdom Overpass'
              label='Project Management'
              path='/projects'
            />
            <CardItem
              src='images/img-john_hart.jpg'
              text="John Hart Generating Station"
              label="Lender's Technical Advisory"
              path='/projects'
            />
            <CardItem
              src='images/img-khcp4.jpg'
              text='Kicking Horse Canyon Phase 4'
              label='Bid Engineering'
              path='/projects'
              />
            <CardItem
              src='images/img-417.jpg'
              text='Confederation Line Extension Phase 2'
              label='Bid Engineering'
              path='/projects'
              />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;