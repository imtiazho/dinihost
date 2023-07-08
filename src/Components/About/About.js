import React from 'react';
import aboutbg from '../../Media/about.svg';

const About = () => {
    return (
        <div className='w-[90%] mx-auto mt-20 text-left grid grid-cols-2 gap-12 items-center'>
            <div className='flex flex-col gap-5'>
                <p className='text-[30px] font-[600] text-black'>About Dinisoft Bangladesh</p>
                <div>
                    <p className='text-[#1565c0] text-[20px] font-[600] mb-2'>Cloud & Technology Solutions in Bangladesh</p>
                    <p className='text-[14px] text-black'>DiniSoft BD is a leading USA-based Cloud & Technology Solutions company that has been offering enterprise-level IT Infrastructure in Bangladesh since 2007. Extremely Fast Dedicated & Virtual Servers, Secure Web Hosting & Business Email Hosting, and Expert Support with a 100% uptime guarantee!</p>
                </div>
                <div>
                    <p className='text-[#1565c0] text-[20px] font-[600] mb-2'>Multiple Data Centers in USA & Bangladesh</p>
                    <p className='text-[14px] text-black'>DiniSoft's servers are Hosted at multiple Data Centers in the USA & Bangladesh, with Gbps & BDIX connectivity. We build and manage our own infrastructure in the USA utilizing Enterprise Hardware, Tier-4 connectivity, and SSD RAID to ensure the highest performance, reliability & Security level.</p>
                </div>
                <div>
                    <p className='text-[#1565c0] text-[20px] font-[600] mb-2'>5000+ Customers in 60+ Countries</p>
                    <p className='text-[14px] text-black'>DiniSoft's clientele includes individuals and companies of all sizes. We have had more than Five Thousand Customers in 60+ Countries over the 22 Years.</p>
                </div>
            </div>
            <div className='px-32'>
                <img src={aboutbg} alt="" />
            </div>
        </div>
    );
};

export default About;