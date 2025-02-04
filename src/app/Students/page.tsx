import React from "react";
import ProgressList from "./components/ProgressList";
import Overall from "./components/Overall";
import StudentHeader from "./components/StudentHeader";
import StudentBody from "./components/StudentBody";

function page(){
    return (
        <div>
            <StudentHeader />
            <Overall />
            <div className="flex flex-row gap-10 mb-6">
                <ProgressList />
            </div>
            <StudentBody />
        </div>
    )
}
export default page;