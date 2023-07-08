import React from 'react';
import aboutbg from '../../Media/about.svg';


const VpsHosting = () => {
    return (
        <div className='w-[90%] mx-auto mt-20 text-left grid grid-cols-2 items-center'>
            <div className='flex flex-col gap-5'>
                <p className='text-[30px] font-[600] text-black'>VPS Hosting in Bangladesh</p>
                <p className='text-[14px] text-black'>Host your corporate Website & Database Apps on a dedicated Virtual Server. Dinisoft BD has pioneered VPS solutions in Bangladesh. Our Virtual Server Platform is currently utilized by many Government and private sector projects. Our Virtual Server Platform is designed from the ground up with the latest Intel server processors and DDR4 RAM. With utilize SSD Raid for the highest IOPS and disk bandwidth, you can get 1Gbps Internet connectivity to your VPS.</p>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className='bg-[#007bff] text-white'>
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
                                    <th className='text-[11px]'>2G KVM</th>
                                    <td className='text-[11px]'>4 Cores CPU</td>
                                    <td className='text-[11px]'>8 GB RAM</td>
                                    <td className='text-[11px]'>1</td>
                                    <td className='text-[11px]'>80GB SSD</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 2700/=</td>
                                </tr>
                                <tr className="bg-[#ddd]">
                                    <th className='text-[11px]'>3G KVM</th>
                                    <td className='text-[11px]'>4 Cores CPU</td>
                                    <td className='text-[11px]'>12GB</td>
                                    <td className='text-[11px]'>1</td>
                                    <td className='text-[11px]'>100GB SSD</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 3000/=</td>
                                </tr>
                                <tr className="">
                                    <th className='text-[11px]'>4G KVM</th>
                                    <td className='text-[11px]'>6 Cores CPU</td>
                                    <td className='text-[11px]'>16 GB RAM</td>
                                    <td className='text-[11px]'>1</td>
                                    <td className='text-[11px]'>140GB NVMe</td>
                                    <td className='text-[11px]'>Unmetered Network</td>
                                    <td className='text-[11px]'>BDT 4000/=</td>
                                </tr>
                            </tbody>
                        </table>

                        <button className='mt-8 btn-sm btn text-white outline-0 border-0 hover:bg-[#007bff] bg-[#007bff] rounded-sm'>View Details</button>
                    </div>
                </div>
            </div>

            <div className='px-32'>
                <img src={aboutbg} alt="" />
            </div>
        </div>
    );
};

export default VpsHosting;