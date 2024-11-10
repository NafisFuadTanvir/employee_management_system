import React from 'react';

const Tasklist = () => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5  flex-nowrap w-full mt-10 py-5'>

            <div className='h-full p-5 flex-shrink-0 w-[300px] bg-red-500 rounded-xl'>
                <div className='flex justify-between px-3'>
                    <h2 className='bg-red-700 px-2 py-1 rounded text-sm'>High</h2>
                    <h3 className='text-sm'>20 Feb 2024</h3>
                </div >
                <h2 className='mt-4 text-2xl font-semibold'>Make a youtube vedio</h2>
                <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ut, blanditiis voluptas expedita ab facere quo harum quidem ipsam eligendi?</p>

            </div>
            
            
        </div>
    );
};

export default Tasklist;