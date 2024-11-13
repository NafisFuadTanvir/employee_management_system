
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useContext, useEffect, useState } from "react"

import { Authcontext } from "./context/Authprovider"
function App() {

  const[user,setUser]= useState(null)
  const[loggedInUserData,setloggedInUserData]= useState(null)

 const authData= useContext(Authcontext)
 
 useEffect(()=>{
  const loggedInUser =localStorage.getItem("loggedInUser")
  if(loggedInUser){

    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
 

 },[])
  

  const handleLogin=(email,password)=>{
      
    if(email=="admin@nafis.com" && password=="123"){
      setUser({role:'admin'})
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if(authData){
      const employee= authData.employees.find((e)=> e.email==email && e.password==password)
      if(employee){
        setUser({role:"employee"})
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
      }
      
      
    }
    else{
      alert("invalid credential")
    }


  }

  


  return (
    <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user.role === "admin" ? (
      <AdminDashboard />
    ) : user.role === "employee" ? (
      <EmployeeDashboard loggedInUserData={loggedInUserData} />
    ) : null}
  </>
  )
}

export default App
