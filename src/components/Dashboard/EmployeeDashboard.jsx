import Tasklist from "../TaskList/Tasklist";
import Header from "./Header";
import Taskcounters from "./Taskcounters";

const EmployeeDashboard = (props) => {

    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            
           <Header changeuser={props.changeuser} loggedInUserData={props.loggedInUserData}></Header>

            <Taskcounters loggedInUserData={props.loggedInUserData}></Taskcounters>

             <Tasklist loggedInUserData={props.loggedInUserData}></Tasklist>
        </div>
    );
};

export default EmployeeDashboard;