import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className="bg-accent rounded p-10">
            <div className="text-center">
                <p className="text-primary text-xl pt-12">Contact Us</p>
                <p className="text-white text-5xl pb-5">Stay Connected With Us</p>
                <form action="">
                    <input type="email" placeholder="email type here" className="input w-full max-w-xs" /><br /><br />
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs" /><br /><br />
                    <textarea className="textarea w-80" placeholder="Bio"></textarea><br /><br />
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Contact;