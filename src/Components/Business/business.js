import React from 'react';
import './business.css';
// import GoatPizza from './goat_pizza.jpg';
import Dominos from './dominos.webp';

const exampleBusiness = {
    image: Dominos,
    name: 'Goat Pizza',
    address: '1234 Pizza St.',
    city: 'Pizza Town',
    state: 'CA',
    zip: '12345',
    category: 'Italian',
    rating: '4.5',
    reviews_count: '100',
}

function Business() {
    return (
        <div className="container">
            <div className="image">
                <img src={exampleBusiness.image} alt="Goat Pizza" />
            </div>

            <div className='text-container'>

                <div className='title'>
                    <h1> {exampleBusiness.name} </h1>
                </div>
                <div className='content'>
                    <div className='left'>
                        <p> {exampleBusiness.address} </p>
                        <p> {exampleBusiness.city} </p>
                        <p> {exampleBusiness.state} {exampleBusiness.zip} </p>
                    </div>

                    <div className='right'>
                        <p> {exampleBusiness.category} </p>
                        <p> {exampleBusiness.rating} </p>
                        <p> {exampleBusiness.reviews_count} reviews </p>
                    </div>
                </div>
            </div>
        </ div>


    );
}

export default Business;