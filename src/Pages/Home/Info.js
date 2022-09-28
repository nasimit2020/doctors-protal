import React from 'react';
import InfoCard from './InfoCard';
import Marker from '../../assets/icons/marker.svg'
import Clock from '../../assets/icons/clock.svg'
import Phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={Clock}></InfoCard>
            <InfoCard bgColor="bg-accent" cardTitle="Our Location" img={Marker}></InfoCard>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={Phone}></InfoCard>
        </div>
    );
};

export default Info;