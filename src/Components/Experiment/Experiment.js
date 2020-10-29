import React from 'react';
import './Experiment.scss';

const Experiment = () => {

    return(
        <section className="experimentWrapper">
            <div className="experimentContainer">  
                <div id="experiment">               
                    <h1 className="title">Experiment</h1>
                    <a className="btn-5 button" href="https://inhyechoi.github.io/Pong-Game-Project/"><span>Pong Game</span></a>
                    <a className="btn-5 button" href="https://inhyechoi.github.io/Instanews/"><span>Instanews</span></a>
                    <a className="btn-5 button" href="https://codepen.io/collection/XexWLd?cursor=ZD0xJm89MSZwPTEmdj03"><span>CodePen</span></a>
                </div>
            </div>
        </section>
    );
};

export default Experiment