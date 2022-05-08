import React from 'react';
import GetInTouch from '../../GetInTouch/GetInTouch';
import Inventory from '../../Inventory/Inventory';
import CreativeTeam from '../../CreativeTeam/CreativeTeam';

import Banner from '../Banner/Banner';



const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <CreativeTeam />
            <GetInTouch />

        </div>
    );
};

export default Home;