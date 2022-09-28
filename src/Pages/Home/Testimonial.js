import React from 'react';
import { useState } from 'react';
import TestimonialInfo from './TestimonialInfo';
import Winson from '../../assets/images/people1.png'
import Hennry from '../../assets/images/people2.png'
import Tommy from '../../assets/images/people3.png'

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([
        {
            _id: 1,
            name: 'Winson Herry',
            address: 'California',
            img: Winson
        },
        {
            _id: 2,
            name: 'Hennry Kisenger',
            address: 'California',
            img: Hennry
        },
        {
            _id: 3,
            name: 'Tommy Bisket',
            address: 'California',
            img: Tommy
        }
    ])
    return (
        <section className='mt-10'>
            <div className="py-5">
                <h1 className="text-2xl pb-5 font-bold text-primary">Testimonial</h1>
                <h1 className="text-5xl font-bold text-accent">What's Your Patient Says</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
                {
                    testimonial.map(testInfo => <TestimonialInfo info={testInfo} key={testInfo._id}></TestimonialInfo>)
                }
            </div>
        </section>
    );
};

export default Testimonial;