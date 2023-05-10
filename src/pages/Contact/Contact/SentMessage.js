import React from 'react';
import bg from '../../../assets/images/bg.png'
const SentMessage = () => {
    return (
        <div
        style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}
       className='p-10' >
           
            <div className=" ">
            <h1 className='text-secondary text-center text-3xl font-bold pt-20'>Send a message to us!</h1>
                <div className="text-center">
                    <div className=" ">
                        <div className="my-5 ">
                            <div className="py-5"> 
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="py-5">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="py-5">
                                <input type="text" placeholder="Your message" className="input input-bordered" />
                            </div>
                            <div className=" mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentMessage;