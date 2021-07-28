import React, {useState} from 'react';

export const AddTask = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank");
        }
        else{
        props.addTask(title, desc);
        settitle("");
        setdesc("");
        }
    }
    
    return (
        <div className="container my-2 p-3">
            <h3>Add a Task</h3>
            <form onSubmit={submit}>
                <div className="form-group my-4 mx-2">
                    <label htmlFor="Title" className="form-label">Task Title</label>
                    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} 
                    className="form-control" id="Title"  placeholder="Enter Task name"/>
                    
                </div>
                <div className="form-group my-2 mx-2">
                    <label htmlFor="Desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} 
                    className="form-control" id="Desc" placeholder="Enter Task details"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success my-1 ">Add this Task</button>
            </form>
        </div>
    )
}
