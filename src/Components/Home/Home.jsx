import React from 'react';
import Carosuel from '../Carosuel/Carosuel';
import About from './About';
import Services from './Services/Services';
import ExtraBookingSection from './ExtraBookingSection/ExtraBookingSection';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Carosuel/>
            <About/>
            <Services/>
            <ExtraBookingSection/>
            <Products/>
        </div>
    );
};

export default Home;