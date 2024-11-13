import React from 'react';

const Newtask = ({data}) => {
    return (
        <div className='h-full p-5 flex-shrink-0 w-[300px] bg-red-500 rounded-xl'>
        <div className='flex justify-between px-3'>
            <h2 className='bg-red-700 px-2 py-1 rounded text-sm'>{data.task_category}</h2>
            <h3 className='text-sm'>{data.task_date} </h3>
        </div >
        <h2 className='mt-4 text-2xl font-semibold'>{data.task_title}</h2>
        <p className='text-sm mt-2'>{data.task_description}</p>
           

           <div className='flex justify-between mt-4'>
            <button className='bg-purple-800 py-1 px-2 text-sm rounded-lg'>Accept Task</button>
            
           </div>
    </div>
    );
};

export default Newtask;