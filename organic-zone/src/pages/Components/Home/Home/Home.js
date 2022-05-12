import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Inventories from '../Inventories/Inventories';
import Sale from '../Sale/Sale';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Sale></Sale>
            <Faq></Faq>
        </div>
    );
};

export default Home;