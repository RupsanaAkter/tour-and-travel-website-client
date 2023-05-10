import React from 'react';
import night from '../../../assets/images/night.jpg'
const ReviewHome = () => {
    return (
        <div className='bm-20'>
        <div className="hero min-h-screen"    style={{
            background: `url(${night})`,
            backgroundSize: 'cover'
        }} >
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
  <h1 className="mb-5 text-5xl font-bold text-white ">Review Section</h1>
 
  
</div>
</div>
</div>
    </div>
    );
};

export default ReviewHome;