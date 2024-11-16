import React from 'react';
import Header from "./Header"
import Createtask from './Createtask';
import Alltask from './Alltask';
const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeuser={props.changeuser}></Header>

            <Createtask></Createtask>
            <Alltask></Alltask>
            
        </div>
    );
};

export default AdminDashboard;