import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = () => {
    return (
        <div className="p-10 bg-[#1c1c1c] h-screen">
            
            <div className=" header flex items-end justify-between">
                <h1 className="text-3xl font-medium">Hello <br /> <span className="text-4xl font-semibold">Nafis 👋</span> </h1>
                <button className="px-5 py-2 bg-purple-700 rounded-md text-white text-xl">Log out</button>
            </div>

            <div className="cards mt-10  flex   items-center justify-between screen gap-5">

                <div className="w-[45%] rounded-xl px-9 py-6 bg-red-600">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="2xl font-medium">New Task</h3>
                </div>
                <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-600">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="2xl font-medium">New Task</h3>
                </div>
                <div className="w-[45%] rounded-xl px-9 py-6 bg-emerald-600">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="2xl font-medium">New Task</h3>
                </div>
                <div className="w-[45%] rounded-xl px-9 py-6 bg-purple-600">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="2xl font-medium">New Task</h3>
                </div>
             </div>

             <Tasklist></Tasklist>
        </div>
    );
};

export default EmployeeDashboard;