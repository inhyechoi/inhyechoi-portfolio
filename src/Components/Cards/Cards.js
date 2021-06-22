import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';

const Cards = () => {
    return (
        <div className="cards">
            <div className="cards__containers">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/" 
                            hexcolor="#E65722" 
                            cmyk="CMYK(5 80 100 1)"
                            rgba="RGB(230 87 34)"
                            style={{background: "#E65722"}}
                        />
                        <CardItem 
                            src="images/" 
                            hexcolor="#2E93EA" 
                            cmyk="CMYK(71 35 0 0)"
                            rgba="RGB(46 147 234)"
                            style={{background: "#2E93EA"}}
                        />
                        <CardItem 
                            src="images/" 
                            hexcolor="#a322ee" 
                            cmyk="CMYK(32 86 0 7)"
                            rgba="rgb(163, 34, 238)"
                            style={{background: "#a322ee"}}
                        />
                        <CardItem 
                            src="images/" 
                            hexcolor="#d081e0" 
                            cmyk="CMYK(7 42 0 12)"
                            rgba="rgb(208, 129, 224)"
                            style={{background: "#d081e0"}}
                        />     
                        <CardItem 
                            src="images/" 
                            hexcolor="#a639e6" 
                            cmyk="CMYK(28 75 0 10)"
                            rgba="rgb(166, 57, 230)"
                            style={{background: "#a639e6"}}
                        />   
                        <CardItem 
                            src="images/" 
                            hexcolor="#f7c10f" 
                            cmyk="CMYK(0 22 94 3)"
                            rgba="rgb(247, 193, 15)"
                            style={{background: "#f7c10f"}}
                        />     
                        <CardItem 
                            src="images/" 
                            hexcolor="#e08a81" 
                            cmyk="CMYK(0 38 42 12)"
                            rgba="rgb(224, 138, 129)"
                            style={{background: "#e08a81"}}
                        />    
                        <CardItem 
                            src="images/" 
                            hexcolor="#F9f9f9" 
                            cmyk="CMYK(0 0 0 2)"
                            rgba="rgb(249, 249, 249)"
                            style={{background: "#F9f9f9"}}
                        />   
                        <CardItem 
                            src="images/" 
                            hexcolor="#f1eff5" 
                            cmyk="CMYK(2 2 0 4)"
                            rgba="rgb(241, 239, 245)"
                            style={{background: "#f1eff5"}}
                        />       
                        <CardItem 
                            src="images/" 
                            hexcolor="#0f0027" 
                            cmyk="CMYK(62 0 100 85)"
                            rgba="rgb(15, 0, 39)"
                            style={{background: "#0f0027"}}
                        />       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;