import React from 'react';
import ServicesInfo from './ServicesInfo';
import Fluoride from '../../assets/images/fluoride.png';
import Favity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Teethment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const cardInfos = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            img: Fluoride
        },
        {
            _id: 2,
            title: "Cavity Filling",
            img: Favity
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            img: Whitening
        }
    ];
    return (
        <div className='my-12'>
            <div className="font-bold text-center">
                <h5 className='text-xl uppercase text-primary'>Our Services</h5>
                <h2 className='text-4xl py-5'>Services We Prodive</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
                {
                    cardInfos.map(cardInfo => <ServicesInfo cardInfo={cardInfo} key={cardInfo._id}></ServicesInfo>)
                }
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row mx-12">
                    <img src={Teethment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="pl-10">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Click Here!</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;