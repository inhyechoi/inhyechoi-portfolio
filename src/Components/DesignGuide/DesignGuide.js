import React from 'react';
import Cards from '../Cards/Cards'
import './DesignGuide.scss';
import Projects from '../Projects/Projects'

const DesignGuide = () => {

    return(
        <section className="designGdWrapper">
            <div className="designGdContainer">  
                <Cards />
                {/* <div className="typography">

                </div>  
                <div className="uiElements">

                </div>  
                <div className="icons">

                </div>   */}
            </div>
        </section>
    );
};

export default DesignGuide