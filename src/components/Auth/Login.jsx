import React, { useState } from 'react';

const Login = () => {

    const [email,setEmail]= useState("")
    const[password,setPassword]= useState("")

    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(`email is:- ${email} and password is:- ${password}`)

        setEmail("")
        setPassword("")

    }
    
    return (
        <div className='flex justify-center items-center h-screen w-screen'>

            <div className='border-2 border-purple-400 p-20 rounded-xl'>

                <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col items-center justify-center' >
                   
                   <input onChange={(e)=>setEmail(e.target.value)} className='border-2 bg-transparent  text-xl border-emerald-500 rounded-full outline-none  py-3 px-5 placeholder:text-gray-400 ' type="email" value={email} placeholder='enter the email' required />
                   <input onChange={(e)=>setPassword(e.target.value)}  className='border-2 mt-5 bg-transparent  text-xl border-emerald-500 rounded-full outline-none  py-3 px-5 placeholder:text-gray-400 ' type="password" value={password} placeholder='enter the password' required />
                   <button className='border-none mt-7  text-xl bg-emerald-500 rounded-full outline-none text-white py-2 px-24 placeholder:text-white ' type="password" placeholder='enter the password' >Log in</button>


                </form>


            </div>
            
        </div>
    );
};

export default Login;