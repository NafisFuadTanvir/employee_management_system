import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage,setLocalStorage } from '../utils/Localstorage';

export const Authcontext=createContext()

const Authprovider = ({children}) => {

    const[userdata,setuserData]= useState(null)

    setLocalStorage()
    useEffect(()=>{

        const {employees,admin}= getLocalStorage() //destructuring from localstorage
        setuserData({employees,admin})
    },[])

    return (
        <Authcontext.Provider value={userdata}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;