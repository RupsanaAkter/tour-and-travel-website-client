import React from 'react';
import tour4 from '../../../../assets/images/4.jpg'
import tour5 from '../../../../assets/images/5.jpg'
import tour6 from '../../../../assets/images/6.jpg'
import Trip from './Trip';
const Trips = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Trip in Indonesia',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: tour4
        },
        {
            id: 2,
            name: 'Trip in Canada',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: tour5
        },
        {
            id: 3,
            name: 'Trip in Bangladesh',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: tour6
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center pb-20'>
                <h3 className='text-5xl font-bold text-secondary uppercase'>Recent Trips</h3>
                <h2 className='text-3xl  font-bold'>You can discover unique destinations usings Google Map</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Trip
                        key={service.id}
                        service={service}
                    ></Trip>)
                }
            </div>
        </div>
    );
};

export default Trips;