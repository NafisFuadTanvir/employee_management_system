import React, { useState } from 'react';

const Header = () => {
    // const [name,setUsername]= useState("")

    // if(!loggedInUserData){
    //     setUsername("admin")
    // }else{
    //     setUsername(loggedInUserData.first_name)
    // }
    const logout=()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()

    }
    return (
        <div className=" header flex items-end justify-between">
        <h1 className="text-3xl font-medium">Hello <br /> <span className="text-4xl font-semibold">Nafis 👋</span> </h1>
        <button onClick={logout} className="px-5 py-2 bg-purple-700 rounded-md text-white text-xl">Log out</button>
    </div>
    );
};

export default Header;