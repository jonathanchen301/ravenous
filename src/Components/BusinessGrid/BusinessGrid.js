import React from 'react';
import './BusinessGrid.css';
import Business from '../Business/Business';
import { BusinessClass } from '../Business/Business';
import Dominos from '../Business/dominos.webp';

const ExampleBusiness = new BusinessClass
    (
        Dominos,
        "Domino's Pizza",
        "1234 Main St",
        "Anytown",
        "CA",
        "12345",
        "Pizza",
        "4.5",
        "100"
    );

const BusinessList = [];
for (let i = 0; i < 6; i++) {
    BusinessList.push(ExampleBusiness);
}

function BusinessGrid() {

    return (
        <div className="businessgrid-container">
            {BusinessList.map((business, index) => (
                <div className={`component${index + 1}`} key={index}>
                    <Business props={business} />
                </div>
            ))}
        </div>
    );

}

export default BusinessGrid;