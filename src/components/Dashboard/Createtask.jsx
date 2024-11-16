import React, { useContext, useState } from 'react';
import { Authcontext } from '../../context/Authprovider';

const Createtask = () => {

    const [taskTitle,setTaskTitle]= useState("")
    const [taskDate, settaskDate] = useState("")
    const [assignTo, setassignTo] = useState("")
    const [catagory, setcatagory] = useState("")
    const [description, setdescription] = useState("")

    const[task,setTask]= useState({})

    const {userdata,setuserData}= useContext(Authcontext)
    const submitHandler=(e)=>{

        e.preventDefault()
        

        setTask({taskTitle,taskDate,catagory,description,active:false,newTask:true,failed:false,completed:false})

        // const data= JSON.parse(localStorage.getItem('employees')) 

        
        // console.log(data.employees)
        
        userdata.employees.forEach((elem)=>{
            if(assignTo==elem.first_name){
                elem.tasks.push(task)

                const newTaskCount = elem.taskCount.find((count) => count.newTask !== undefined);
                if (newTaskCount) {
                    newTaskCount.newTask += 1; // Increment the newTask count
                }

                setuserData(userdata)


                


            }

        })

        localStorage.setItem("employees",userdata)
        
        setTaskTitle("")
        settaskDate("")
        setassignTo("")
        setcatagory("")
        setdescription("")
    


        
       

    }
    return (
        <div className='p-10 bg-[#1c1c1c] mt-10 ronded'>
                <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between' >

                    <div className='w-1/2'>
                    <div>
                    <h3 className='text-sm mb-0.5 text-gray-300'>Task name</h3>
                    <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='enter task name' />
                    </div>
                    
                   
                    <div>
                    <h3 className='text-sm mb-0.5 text-gray-300'>Date</h3>
                    <input value={taskDate} onChange={(e)=>settaskDate(e.target.value)} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="date" name="" id="" />
                    </div>
                   <div>
                   <h3  className='text-sm mb-0.5 text-gray-300'>Assign To</h3>
                   <input value={assignTo} onChange={(e)=>setassignTo(e.target.value)} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="text" placeholder='enter employee name' />
                   </div>
                    <div>
                    <h3 className='text-sm mb-0.5 text-gray-300'>Catagory</h3>
                    <input value={catagory} onChange={(e)=>setcatagory(e.target.value)} className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-[1px] border-gray-400 mb-4'  type="text" placeholder='desgin/dev etc' />
                    </div>
                   
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                    <div>
                     <h3 className='text-sm mb-0.5 text-gray-300'>Description</h3>
                    <textarea value={description} onChange={(e)=>setdescription(e.target.value)} className=' w-full h-44 text-sm py-2 px-44 rounded outline-none bg-transparent border-[1px] border-gray-400'  name="" id="" cols="30" rows="10"></textarea></div>
                    <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                    
                </form>
            </div>
    );
};

export default Createtask;