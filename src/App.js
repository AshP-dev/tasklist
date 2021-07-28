import './App.css';
import Header from "./MyComponents/Header";
import {Tasks} from "./MyComponents/Tasks";
import {Footer} from "./MyComponents/Footer";
import {AddTask} from "./MyComponents/AddTask"
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";



function App() {
  let initTask;
  if(localStorage.getItem("tasks") === null){
    initTask = [];
  }
  else{
    initTask = JSON.parse(localStorage.getItem("tasks"));
  }

  const onDelete = (task)=>{
    console.log("On delete of task executed", task );
    
    setTasks(tasks.filter((e)=>{
      return e!==task;
    }));
    console.log("deleted",tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }

  const addTask = (title,desc) => {
    console.log("A Task is added",title,desc)
    let sno;
    if(tasks.length===0) {
      sno = 0;
    }
    else {
      sno=tasks[tasks.length-1].sno +1;
    }  
    const myTask = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTasks([...tasks,myTask]);
    console.log(myTask);

  }

  const [tasks, setTasks] = useState(initTask);
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
    <Router>
        <Header title="My Tasklist"  searchBar={ false } />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTask addTask={addTask}/>
              <Tasks tasks={tasks} onDelete={onDelete} />
              </>
            )
          }}>
          </Route> 
        
        </Switch>
      <Footer/>
    </Router>
       
    </>
  );
}

export default App;
