import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";


const Alltask = () => {

    const {userdata,setuserData}= useContext(Authcontext)
    
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5   '>

            <div className='bg-blue-700 mb-2  px-4 py-2 flex items-center justify-between rounded-sm'>
                <h2  className="text-xl w-1/5">Employee Name</h2>
                <h3 className="text-xl w-1/5">New Task</h3>
                <h3 className="text-xl w-1/5">Active Task</h3>
                <h3 className="text-xl w-1/5">Completed</h3>
                <h5 className="text-xl w-1/5">Failed</h5>
            </div>

            <div className="">

            {
                userdata.employees.map((elem,idx)=>{

                    const newTaskCount = elem.taskCount.find(task => task.newTask)?.newTask || 0;
            const activeTaskCount = elem.taskCount.find(task => task.active)?.active || 0;
            const completedTaskCount = elem.taskCount.find(task => task.completed)?.completed || 0;
            const failedTaskCount = elem.taskCount.find(task => task.failed)?.failed || 0;


                    return  <div key={idx} className=' border border-cyan-500  mb-2  px-4 py-2 flex items-center justify-between rounded-sm'>
                    <h2 className="w-1/5 text-lg">{elem.first_name}</h2>
                    <h3 className=" text-xl w-1/5 text-green-600">{newTaskCount}</h3>
                    <h3 className=" text-purple-400 text-xl w-1/5">{activeTaskCount}</h3>
                    <h3 className=" text-lime-500 text-xl w-1/5">{completedTaskCount}</h3>
                    <h5 className=" text-blue-300 text-xl w-1/5">{failedTaskCount}</h5>
                </div>
                })
            }
            </div>
           
           
        </div>
    );
};

export default Alltask;