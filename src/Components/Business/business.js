import React from 'react';
import './Business.css';
// import GoatPizza from './goat_pizza.jpg';
// import Dominos from './dominos.webp';

export class BusinessClass {

    constructor(image, name, address, city, state, zip, category, rating, reviews_count) {
        this.image = image;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.category = category;
        this.rating = rating;
        this.reviews_count = reviews_count;
    }

}

function Business({ props }) {
    return (
        <div className="container">
            <div className="image">
                <img src={props.image} alt="Goat Pizza" />
            </div>

            <div className='text-container'>

                <div className='title'>
                    <h1> {props.name} </h1>
                </div>
                <div className='content'>
                    <div className='left'>
                        <p> {props.address} </p>
                        <p> {props.city} </p>
                        <p> {props.state} {props.zip} </p>
                    </div>

                    <div className='right'>
                        <p> {props.category} </p>
                        <p> {props.rating} </p>
                        <p> {props.reviews_count} reviews </p>
                    </div>
                </div>
            </div>
        </ div>


    );
}

export default Business;