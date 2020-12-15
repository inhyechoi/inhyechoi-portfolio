import React, { useState, useEffect } from 'react';
import './Spinner.scss';

const LoadSpinner = () => {

    const [loading, setLoading] = useState(true);

    useEffect(
        ()=>{
            setTimeout(() => setLoading(false), 6000)
        }, []
    )

    return(
        <>
             <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    );
}

export default LoadSpinner;