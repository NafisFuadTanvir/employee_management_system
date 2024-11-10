import React from 'react';

const Createtask = () => {
    return (
        <div className='p-10 bg-[#1c1c1c] mt-10 ronded'>
                <form className='flex flex-wrap w-full items-start justify-between' >

                    <div className='w-1/2'>
                    <div>
                    <h3 className='text-sm mb-0.5 text-gray-300'>Task name</h3>
                    <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='enter task name' />
                    </div>
                    
                   
                    <div>
                    <h3 className='text-sm mb-0.5 text-gray-300'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="date" name="" id="" />
                    </div>
                   <div>
                   <h3 className='text-sm mb-0.5 text-gray-300'>Assign To</h3>
                   <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="text" placeholder='enter employee name' />
                   </div>
                    <div>
                    <h3 className='text-sm mb-0.5 text-gray-300'>Catagory</h3>
                    <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="text" placeholder='desgin/dev etc' />
                    </div>
                   
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                    <div>
                     <h3 className='text-sm mb-0.5 text-gray-300'>Description</h3>
                    <textarea className=' w-full h-44 text-sm py-2 px-44 rounded outline-none bg-transparent border-[1px] border-gray-400'  name="" id="" cols="30" rows="10"></textarea></div>
                    <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                    
                </form>
            </div>
    );
};

export default Createtask;