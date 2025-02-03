import React from "react";
import ProgressList from "./components/ProgressList";



function page(){
    return (
        <div>
            <h1 className="text-black font-bold text-lg pb-5">Students Portal</h1>
            <div className="flex flex-row gap-10">
                <ProgressList />
            </div>
        </div>
    )
}
export default page;