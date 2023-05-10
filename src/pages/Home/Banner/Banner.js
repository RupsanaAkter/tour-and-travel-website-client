import React from 'react';
import bg from '../../../assets/images/12.jpg'
const Banner = () => {
    return (
        <div className='bm-20'>
            <div className="hero min-h-screen"    style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }} >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white ">Your Journey Your Story</h1>
      <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary text-white">Travel plan</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;