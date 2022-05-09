import React from 'react';
import GetInTouch from '../../GetInTouch/GetInTouch';
import Inventory from '../../Inventory/Inventory';
import CreativeTeam from '../../CreativeTeam/CreativeTeam';

import Banner from '../Banner/Banner';
import Stats from '../../Stats/Stats';



const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <Stats />
            {/* <CreativeTeam /> */}
            {/* <GetInTouch /> */}

        </div>
    );
};

export default Home;