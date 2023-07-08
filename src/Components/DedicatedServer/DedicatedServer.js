import React from 'react';
import aboutbg from '../../Media/about.svg';

const DedicatedServer = () => {
    return (
        <div className='w-[90%] mx-auto mt-20 text-left grid grid-cols-2 items-center'>
            <div className='px-32'>
                <img src={aboutbg} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-[30px] font-[600] text-black'>Dedicated Server in Bangladesh</p>
                <p className='text-[14px] text-black'>Take your IT Projects to the next level with a high-performance Dedicated Server from Dinisoft BD. Get extreme performance from the latest Intel Xeon E5-V4 dual Processor with upto 28 Physical Core and 56 Logical Core. Your dedicated server will feature with 256 GB DDR4 ECC Registered RAM and 7.68 TB SAS Raid Storage</p>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className='bg-[#dc3545] text-white'>
                                <tr>
                                    <th>Server</th>
                                    <th>CPU</th>
                                    <th>RAM</th>
                                    <th>IPv4</th>
                                    <th>Storage</th>
                                    <th>Bandwith</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody className='text-black'>
                                <tr>
                                    <th className='text-[11px]'>USA 1G</th>
                                    <td className='text-[11px]'>E-2186G (012019)</td>
                                    <td className='text-[11px]'>32 GB ECC DDR</td>
                                    <td className='text-[11px]'>5</td>
                                    <td className='text-[11px]'>480 GB SSD</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 10000/=</td>
                                </tr>
                                <tr className="bg-[#ddd]">
                                    <th className='text-[11px]'>USA 2G</th>
                                    <td className='text-[11px]'>E-2276G (010120)</td>
                                    <td className='text-[11px]'>64 GB ECC DDR4</td>
                                    <td className='text-[11px]'>5</td>
                                    <td className='text-[11px]'>1 TB NVMe	</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 12500/=</td>
                                </tr>
                                <tr className="">
                                    <th className='text-[11px]'>USA 3G</th>
                                    <td className='text-[11px]'>E-2288G (122019)</td>
                                    <td className='text-[11px]'>64 GB ECC DDR4	</td>
                                    <td className='text-[11px]'>5</td>
                                    <td className='text-[11px]'>1 TB NVM</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 19000/=</td>
                                </tr>
                                <tr className="bg-[#ddd]">
                                    <th className='text-[11px]'>BDIX</th>
                                    <td className='text-[11px]'>E3-1240v5</td>
                                    <td className='text-[11px]'>32 GB</td>
                                    <td className='text-[11px]'>5</td>
                                    <td className='text-[11px]'>1TB SSD</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 16000/=</td>
                                </tr>
                            </tbody>
                        </table>

                        <button className='mt-8 btn-sm btn text-white outline-0 border-0 hover:bg-[#007bff] bg-[#007bff] rounded-sm'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DedicatedServer;