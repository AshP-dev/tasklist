import React from 'react'

export const TaskItem  = ({task,onDelete}) => {
    return (
        <>
        <div className =" my-2 p-3">
            <h4>{task.title}</h4>
            <p>{task.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(task)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
