import React from 'react';

import Experiment from '../Components/Experiment/Experiment';
import '../Style/index.scss';
import '../mixins.scss';
import '../variables.scss';
import '../Style/fonts.scss';
import '../Components/Experiment/Experiment.scss';

const ExperimentPage = () => {
    return(
        <div className="container">
            <Experiment />
        </div>
    );
}

export default ExperimentPage;