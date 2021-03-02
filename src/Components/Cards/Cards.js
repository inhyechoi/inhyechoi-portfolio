import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';

const Cards = () => {
    return (
        <div className="cards">
            {/* <h1>Check out these awesome projects!</h1> */}
            <div className="cards__containers">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/" 
                            hexcolor="#E65722" 
                            cmyk="CMYK(5 80 100 1)"
                            rgba="RGB(230 87 34)"
                        />
                        <CardItem 
                            src="images/" 
                            hexcolor="#2E93EA" 
                            cmyk="CMYK(71 35 0 0)"
                            rgba="RGB(46 147 234)"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;