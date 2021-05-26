import React from 'react';
import './NotFoundPage.scss'
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
    const history = useHistory();
    return(
        <div>
            <div className="notFoundWrapper">
                <h3>404 page not found</h3>
                <p>sorry, but the page you are looking for does not exist.</p>
                <button className="button back-button" onClick={() => history.goBack()}>Back</button>
            </div>
        </div>
    );
}

export default NotFoundPage;