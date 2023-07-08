import React from 'react';
import logo from '../../Media/logo.png';
import oldG from '../../Media/old_20.png';

const SecondNav = () => {
    return (
        <div className='bg-accent py-4'>
            <div className='w-[80%] mx-auto flex justify-between items-center'>
                <img className='w-[150px]' src={logo} alt="" />
                <img className='w-[50px]' src={oldG} alt="" />
            </div>
        </div>
    );
};

export default SecondNav;