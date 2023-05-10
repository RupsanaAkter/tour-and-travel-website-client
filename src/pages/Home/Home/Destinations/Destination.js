import React from 'react';
import tour from '../../../../assets/images/1 (1).jpg'
import footer from '../../../../assets/images/footer.png'
const Destination = () => {
    return (
      <section 
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover'
    }}
      >
          <div className='text-center pt-20'>
            <h1 className='text-5xl font-bold text-secondary uppercase'>Popular Destinations</h1>
            <h1 className='text-3xl font-bold'>Tours give you the oppertunity to see a lot,within a time frame</h1>
        </div>
       <div>
         <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={tour}className="rounded-lg lg:w-1/2 shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            
          </div>


      


        </div>
      </div>
       </div>

     
      </section>
    );
};

export default Destination;