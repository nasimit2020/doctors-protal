import React from 'react';

const TestimonialInfo = ({ info }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center ">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum est atque fugiat, nam harum dolore ducimus corrupti aut ratione velit, at eius soluta quos in labore? Fugiat recusandae voluptates pariatur.</p>
                <div className="card-actions justify-end pt-5">
                    <img src={info.img} alt="" />
                    <div className="pl-5">
                        <p>{info.name}</p>
                        <p>{info.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialInfo;