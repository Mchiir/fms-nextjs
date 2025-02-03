import React from "react";
import Progress, { Item } from "./Progress";

const ProgressList: React.FC = () =>{
    const progressList: Item[] = [
        { count:12, label:"Courses", timeFrame:"Last week" },
        { count:13, label:"Assessments", timeFrame:"Last week" },
        { count:14, label:"Materials", timeFrame:"Last week" },
        { count:15, label:"Students", timeFrame:"Last week" },
    ]
    
    return(
        <div className="flex flex-wrap gap-10">
            {progressList.map((item, index)=> (
                <Progress key={index} item={item}/>
            ))}
        </div>
    )
}

export default ProgressList