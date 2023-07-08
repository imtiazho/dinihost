import React from 'react';
import aboutbg from '../../Media/about.svg';


const SharedHosting = () => {
    return (
        <div className='w-[90%] mx-auto mt-20 text-left grid grid-cols-2 gap-12 items-center'>
            <div className='px-32'>
                <img src={aboutbg} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-[30px] font-[600] text-black'>Shared Hosting</p>
                <div>
                    <p className='text-[14px] text-[#424242]'>DiniSoft BD is a leading USA-based Cloud & Technology Solutions company that has been offering enterprise-level IT Infrastructure in Bangladesh since 2007. Extremely Fast Dedicated & Virtual Servers, Secure Web Hosting & Business Email Hosting, and Expert Support with a 100% uptime guarantee!</p>
                    <div className='mt-8 grid grid-cols-2 gap-8'>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-brands fa-windows"></i> Shared Hosting</p>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-solid fa-newspaper"></i> News Portal Hosting</p>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-solid fa-cart-plus"></i> Ecommerce Hosting</p>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-solid fa-database"></i> Free Domain Plan</p>
                    </div>

                    <button className='mt-8 btn-sm btn text-white outline-0 border-0 hover:bg-[#007bff] bg-[#007bff] rounded-sm'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SharedHosting;