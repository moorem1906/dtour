import React from 'react';
import DestinationSearch from './DestinationSearch'
import Destinations from './Destinations'
import Trip from "./Trip"

const Landing = () =>  {
    return (
        <div style= {{ textAlign: 'center'}}>
            <h1>
                Dtour!
            </h1>
            <div>
            <span style={{width: '40%', display: 'inline-block', height: '300px'}}>
                <DestinationSearch />
            </span>
            <span style={{width: '40%', marginLeft: '5%', float: 'right', display: 'inline-block', height: '300px'}}>
                <Destinations />
            </span>
            </div>
            <div style={{marginTop: '20px', borderTop: '5px SOLID grey'}}>
                <Trip />
            </div>

        </div>

    );
};

export default Landing;