import React from 'react';
import './Experiment.scss';

const Experiment = () => {

    return(
        <section className="experimentWrapper">
            <div className="container experimentContainer">  
                <div id="experiment">               
                    <h1 className="title">Experiment</h1>
                    <a className="btn experimentBtn" href="https://inhyechoi.github.io/Pong-Game-Project/">Pong Game</a>
                    <a className="btn experimentBtn" href="https://inhyechoi.github.io/Instanews/">Instanews</a>
                    <a className="btn experimentBtn" href="https://codepen.io/collection/XexWLd?cursor=ZD0xJm89MSZwPTEmdj03">CodePen</a>
                </div>
            </div>
        </section>
    );
};

export default Experiment