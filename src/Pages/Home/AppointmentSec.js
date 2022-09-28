import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentSec = () => {
    return (
        <div className="hero bg-accent">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="w-96 mt-[-100px] hidden lg:block" />
                <div className="sm:p-5 md:p-5">
                    <h1 className="text-2xl font-bold text-primary">Appontment</h1>
                    <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Make an Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSec;