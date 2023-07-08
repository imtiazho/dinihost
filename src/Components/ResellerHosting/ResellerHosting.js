import React from 'react';
import aboutbg from '../../Media/about.svg';


const ResellerHosting = () => {
    return (
        <div className='w-[90%] mx-auto mt-20 text-left grid grid-cols-2 gap-12 items-center'>
            <div className='flex flex-col gap-5'>
                <p className='text-[30px] font-[600] text-black'>Reseller Hosting</p>
                <div>
                    <p className='text-[14px] text-[#424242]'>Take your IT Projects to the next level with a high-performance Reseller Hosting from Dinisoft BD. Get extreme performance from the latest Intel Xeon E5-V4 dual Processor with upto 28 Physical Core and 56 Logical Core. Your dedicated server will feature with 256 GB DDR4 ECC Registered RAM and 7.68 TB SAS Raid Storage</p>
                    <div className='mt-8 grid grid-cols-2 gap-8'>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-solid fa-database"></i> Cheap Reseller</p>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-solid fa-database"></i> Advance Reseller</p>
                        <p className='text-[#007bff] text-[13px] flex items-center gap-2'><i class="fa-solid fa-database"></i>  Ultimate Reseller</p>
                    </div>

                    <button className='mt-8 btn-sm btn text-white outline-0 border-0 hover:bg-[#007bff] bg-[#007bff] rounded-sm'>View Details</button>
                </div>
            </div>

            <div className='px-32'>
                <img src={aboutbg} alt="" />
            </div>
        </div>
    );
};

export default ResellerHosting;