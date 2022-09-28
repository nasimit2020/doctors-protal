import React from 'react';
import AppointmentSec from './AppointmentSec';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <AppointmentSec></AppointmentSec>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </section >
    );
};

export default Home;