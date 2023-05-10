import React from 'react';
import Banner from '../Banner/Banner';
import Destination from './Destinations/Destination';
import Trips from './Trips/Trips';

const Home = () => {
    return (
        <div className='mx-20'> 
            <Banner></Banner>
            <Destination></Destination>
            <Trips></Trips>
        </div>
    );
};

export default Home;