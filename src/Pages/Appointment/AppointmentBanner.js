import React from 'react';
import Chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" alt="Doctor Chair" />
                <div className="pr-12">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />;
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;