import React from 'react';

const Facilities = () => {
    return (
        <div className='w-[80%] mt-20 mx-auto grid grid-cols-4 gap-6'>
            <div className='shadow-lg border py-8 text-black px-6'>
                <p className='text-[23px] font-[500] mb-2'>Moneyback</p>
                <p className='text-[12px]'>Money-back guarantee is available to all new Web Hosting customers</p>
            </div>
            <div className='shadow-lg border py-8 text-black px-6'>
                <p className='text-[23px] font-[500] mb-2'>Full Features</p>
                <p className='text-[12px]'>We do more than web hosting. Our tool suite includes everything you</p>
            </div>
            <div className='shadow-lg border py-8 text-black px-6'>
                <p className='text-[23px] font-[500] mb-2'>Uptime 99.9%</p>
                <p className='text-[12px]'>We understand the uptime importance. We pledge to deliver.</p>
            </div>
            <div className='shadow-lg border py-8 text-black px-6'>
                <p className='text-[23px] font-[500] mb-2'>Support 24/7</p>
                <p className='text-[12px]'>US-based experts are available to help when you get stuck.</p>
            </div>
        </div>
    );
};

export default Facilities;