import React from 'react'
import {TaskItem} from "./TaskItem";


export const Tasks = (props) => {
    let tasksStyle = {
        minHeight : "70vh"
    }
    return (
        <div className="container my-3" style={tasksStyle}>
            <h3 className=" my-3 p-6"> Task List</h3>
            {props.tasks.length===0? "No tasks to display":
            props.tasks.map((task)=>{
                console.log(task.sno);
                return (<TaskItem task={task} key={task.sno} onDelete={props.onDelete}/>)
            
            })
        }
        </div>
    )
}

