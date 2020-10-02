import React from 'react';
import './Experiment.scss';

const Experiment = () => {

    return(
        <section className="experimentWrapper">
            <h1>Experiment</h1>
            <div className="container experimentContainer">                      
                <a className="btn experimentBtn" href="https://inhyechoi.github.io/Pong-Game-Project/">Pong Game</a>
                <a className="btn experimentBtn" href="https://inhyechoi.github.io/Instanews/">Instanews</a>
                <a className="btn experimentBtn" href="/">Coming Soon</a>
            </div>
        </section>
    );
};

export default Experiment