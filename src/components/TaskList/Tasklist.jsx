import React from 'react';
import Accepttask from './Accepttask';
import Newtask from './Newtask';
import Completedtask from './Completedtask';
import Failedtask from './Failedtask';

const Tasklist = ({loggedInUserData}) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5  flex-nowrap w-full mt-10 py-5'>

         
         {

          loggedInUserData.tasks.map((element,index)=>{
             
            if(element.active){
              return <Accepttask key={index} data={element} ></Accepttask>
            }
            if(element.Newtask){
              return <Newtask key={index} data={element} ></Newtask>
            }
            if(element.Completedtask){
              return <Completedtask key={index} data={element} ></Completedtask>
            }
            if(element.Failedtask){

              return <Failedtask key={index} data={element} ></Failedtask>
            }

          })
         }

           
          {/* <Accepttask></Accepttask>
          <Newtask></Newtask>
          <Completedtask></Completedtask>
          <Failedtask></Failedtask> */}
            
            
        </div>
    );
};

export default Tasklist;