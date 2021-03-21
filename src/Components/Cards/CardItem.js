import React from 'react';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardItem = (props) => {

    // const cardBgColors = { 
    //     "Default": "#81b71a",
    //     "Blue": "#00B1E1",
    //     "Cyan": "#37BC9B",
    //     "Green": "#8CC152",
    //     "Red": "#E9573F",
    //     "Yellow": "#F6BB42",
    // }
    const items = [
        {
            id: "0",
            bgColor: "#81b71a"
        },
        {
            id: "1",
            bgColor: "#00B1E1"
        }
    ]

    return (
        <>
            <li className="cards__item cards__item__link">

            {items.map((item)=>{
                return(
                    <Figure className="cards__item__bg-wrap">
                        <div  key={item.id} className="cards__item__bg-left" color={ item.bgColor }>Regular</div>
                        <div className="cards__item__bg-right" background={ item.bgColor }>Hover</div>
                    </Figure>
                );
            })}
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