import React from 'react';
import GetInTouch from '../../GetInTouch/GetInTouch';
import Inventory from '../../Inventory/Inventory';
import CreativeTeam from '../../CreativeTeam/CreativeTeam';

import Banner from '../Banner/Banner';
import Stats from '../../Stats/Stats';
import RunningOrder from '../../RunningOrder/RunningOrder';



const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <RunningOrder />
            <Stats />
        </div>
    );
};

export default Home;