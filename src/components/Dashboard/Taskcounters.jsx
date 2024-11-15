

function Taskcounters({loggedInUserData}) {

    const taskCount = loggedInUserData.taskCount;
  return (
    <div className="cards mt-10  flex   items-center justify-between screen gap-5">

                <div className="w-[45%] rounded-xl px-9 py-6 bg-red-600">
                    <h2 className="text-3xl font-semibold">{taskCount[1].newTask}</h2>
                    <h3 className="2xl font-medium">New Task</h3>
                </div>
                <div className="w-[45%] rounded-xl px-9 py-6 bg-blue-600">
                    <h2 className="text-3xl font-semibold">{taskCount[0].active}</h2>
                    <h3 className="2xl font-medium">Active</h3>
                </div>
                <div className="w-[45%] rounded-xl px-9 py-6 bg-emerald-600">
                    <h2 className="text-3xl font-semibold">{taskCount[2].completed}</h2>
                    <h3 className="2xl font-medium">Completed</h3>
                </div>
                <div className="w-[45%] rounded-xl px-9 py-6 bg-purple-600">
                    <h2 className="text-3xl font-semibold">{taskCount[3].failed}</h2>
                    <h3 className="2xl font-medium">Failed</h3>
                </div>
             </div>
  )
}

export default Taskcounters