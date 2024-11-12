import Tasklist from "../TaskList/Tasklist";
import Header from "./Header";
import Taskcounters from "./Taskcounters";

const EmployeeDashboard = ({loggedInUserData}) => {

    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            
           <Header loggedInUserData={loggedInUserData}></Header>

            <Taskcounters loggedInUserData={loggedInUserData}></Taskcounters>

             <Tasklist loggedInUserData={loggedInUserData}></Tasklist>
        </div>
    );
};

export default EmployeeDashboard;