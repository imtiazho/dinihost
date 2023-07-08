import React from 'react';

const UpperNav = () => {
    return (
        <div className='bg-secondary'>
            <div className='w-[90%] mx-auto flex justify-between items-center text-white py-2'>
                <div className='text-[13px] flex items-center gap-2'><i class="fa-regular fa-envelope"></i> sales@dinisoftbd.com</div>
                <div className='text-[13px] flex items-center gap-2'><i class="fa-solid fa-phone"></i> +8809613822066</div>
                <div className='text-[13px] flex items-center gap-2'><i class="fa-solid fa-right-to-bracket"></i> Login</div>
                <div className='flex items-center gap-2'>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                    <a href=""><i class="fa-brands fa-skype"></i></a>
                    <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    );
};

export default UpperNav;