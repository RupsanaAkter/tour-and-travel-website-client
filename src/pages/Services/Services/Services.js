import React, { useState } from 'react';
import ServiceBanner from './ServiceBanner';
import AvailableService from './AvailableService';

const Services = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
        <ServiceBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        ></ServiceBanner>
        <AvailableService
            selectedDate={selectedDate}
        ></AvailableService>
    </div>
    );
};

export default Services;