import Tasklist from "../TaskList/Tasklist";
import Header from "./Header";
import Taskcounters from "./Taskcounters";

const EmployeeDashboard = () => {
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            
           <Header></Header>

            <Taskcounters></Taskcounters>

             <Tasklist></Tasklist>
        </div>
    );
};

export default EmployeeDashboard;