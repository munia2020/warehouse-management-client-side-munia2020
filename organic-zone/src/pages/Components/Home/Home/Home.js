import React from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Inventories from '../Inventories/Inventories';
import QusAns from '../QusAns/QusAns';
import Sale from '../Sale/Sale';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Sale></Sale>
            <QusAns></QusAns>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;