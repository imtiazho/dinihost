import React from 'react';
import blogaImage from '../../Media/blogs.jpg';

const Blogs = () => {
    return (
        <div className='w-[90%] mt-20 mx-auto'>
            <div className='flex justify-between items-center'>
                <p className='text-[35px] text-black font-[600]'>Latest Blog</p>
                <button className='btn text-white outline-0 border-0 hover:bg-[#007bff] bg-[#007bff] rounded-sm'>Read More Blogs</button>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-8'>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
                <div className='shadow-lg p-1'>
                    <img className='mb-2' src={blogaImage} alt="" />
                    <p className='text-black py-2 px-6 text-[13px]'>This is the very important blog. You must have to read this now</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;