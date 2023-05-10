import React from 'react';
import ContactUs from './ContactUs';
import SentMessage from './SentMessage';

const Contact = () => {
    return (
        <div className='mx-20'>
            <ContactUs></ContactUs>
            <SentMessage></SentMessage>
        </div>
    );
};

export default Contact;