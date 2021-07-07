import React from 'react';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardItem = (props) => {

    return (
        <>
            <li className="cards__item cards__item__link">

                <div className="cards__item__bg-left" style={props.style}>Regular</div>
                <div className="cards__item__info">
                    <p className="cards__item__text">{props.hexcolor}</p>
                    <div className="cards__item__desc">
                        <p className="cards__item__desc-top">{props.rgba}</p>
                        <p className="cards__item__desc-bottom">{props.cmyk}</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default CardItem;