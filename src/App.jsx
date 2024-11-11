
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "./utils/Localstorage"
function App() {

  const[user,setUser]= useState(null)

  const handleLogin=(email,password)=>{
      
    if(email=="admin@nafis.com" && password=="123"){
      setUser('admin')
    }
    else if(email=="user@nafis.com" && password=="123"){
      setUser("employee")
    }
    else{
      alert("invalid credential")
    }


  }


  return (
    <>

    {
      !user ? <Login handleLogin={handleLogin} ></Login> : ""
    }

     {
          user=='admin' ? <AdminDashboard></AdminDashboard> : <EmployeeDashboard></EmployeeDashboard>
     }
     
      
    </>
  )
}

export default App
